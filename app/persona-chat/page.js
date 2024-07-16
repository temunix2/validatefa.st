'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import LayoutClient from '@/components/LayoutClient';
import Header from '@/components/Header';
import { writingPersonas, personaTerms } from './writingPersonas';

// Add brief descriptions for each persona
const personaDescriptions = {
  creative_writer: "A master storyteller who excels in narrative crafting and character development.",
  editor: "A sharp-eyed professional who refines and polishes written work to perfection.",
  poet: "An artistic soul who weaves words into rhythmic and evocative verses.",
  writing_coach: "A supportive guide who helps writers develop their skills and overcome challenges.",
  motivator: "An enthusiastic cheerleader who keeps writers inspired and moving forward.",
  critic: "An analytical mind who provides constructive feedback to elevate your writing.",
  innovator: "A creative thinker who pushes boundaries and sparks unique ideas.",
  mentor: "An experienced sage who shares wisdom from years in the writing world.",
  scribe: "A technical expert who hones the craft of writing to its finest detail."
};

export default function PersonaChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedPersona, setSelectedPersona] = useState(writingPersonas[0]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    }
  }, [status, router]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    try {
      const response = await fetch('/api/persona', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: session?.user?.id,
          message: inputMessage,
          persona: selectedPersona.id,
          prompt: selectedPersona.prompt
        }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { 
        role: 'persona', 
        content: data.response, 
        personaName: selectedPersona.name,
        personaEmoji: selectedPersona.emoji
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'persona', 
        content: 'Sorry, an error occurred.',
        personaName: selectedPersona.name,
        personaEmoji: selectedPersona.emoji
      }]);
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'unauthenticated') return null;

  return (
    <LayoutClient>
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Chat with Writing {personaTerms.plural}</h1>
        <div className="flex space-x-4">
          {/* Chat Section */}
          <div className="flex-grow space-y-4">
            <div className="bg-white shadow-lg rounded-lg p-4 h-[70vh] overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${
                    msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.role === 'persona' && (
                      <div className="font-bold mb-1">
                        {msg.personaEmoji} {msg.personaName}
                      </div>
                    )}
                    <ReactMarkdown className="prose max-w-none dark:prose-invert">
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">Send</button>
            </form>
          </div>

          {/* Persona Selection Section */}
          <div className="w-64 space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="font-bold text-lg">Current {personaTerms.singular}: {selectedPersona.emoji} {selectedPersona.name}</div>
              <div className="text-gray-700 mt-2">
                {personaDescriptions[selectedPersona.id]}
              </div>
            </div>
            <div className="space-y-2 h-[50vh] overflow-y-auto pr-2">
              {writingPersonas.map(persona => (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona)}
                  className={`w-full px-4 py-2 rounded text-left ${
                    selectedPersona.id === persona.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {persona.emoji} {persona.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutClient>
  );
}
