'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import LayoutClient from '@/components/LayoutClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { writingPersonas, personaTerms } from './writingPersonas';
import config from '@/config';

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
    // Set the theme for this page
    document.documentElement.setAttribute('data-theme', config.colors.personaChatTheme);
    // Cleanup function to reset the theme when leaving the page
    return () => {
      document.documentElement.setAttribute('data-theme', config.colors.theme);
    };
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
      <div className="max-w-6xl mx-auto p-4 bg-base-100">
        <h1 className="text-3xl font-bold text-primary mb-4">Chat with Writing {personaTerms.plural}</h1>
        <div className="flex space-x-4">
          {/* Chat Section */}
          <div className="flex-grow space-y-4">
            <div className="bg-base-200 shadow-lg rounded-lg p-4 h-[70vh] overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${
                    msg.role === 'user' ? 'bg-primary text-primary-content' : 'bg-secondary text-secondary-content'
                  }`}>
                    {msg.role === 'persona' && (
                      <div className="font-bold mb-1">
                        {msg.personaEmoji} {msg.personaName}
                      </div>
                    )}
                    <ReactMarkdown className="prose max-w-none">
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
                className="flex-grow p-2 input input-bordered input-primary"
                placeholder="Type your message..."
              />
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>

          {/* Persona Selection Section */}
          <div className="w-64 space-y-4">
            <div className="p-4 bg-base-200 text-base-content rounded-lg shadow-md">
              <div className="font-bold text-lg">Current {personaTerms.singular}</div>
              <div className="mt-2 p-2 bg-base-100 rounded">
                <span className="text-2xl">{selectedPersona.emoji}</span>
                <span className="font-bold ml-2">{selectedPersona.name}</span>
              </div>
              <div className="mt-2 text-sm">
                {personaDescriptions[selectedPersona.id]}
              </div>
            </div>
            <div className="bg-base-200 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold p-3 bg-base-300 rounded-t-lg">Select a {personaTerms.singular}</h2>
              <div className="h-[50vh] overflow-y-auto p-2">
                {writingPersonas.map(persona => (
                  <button
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona)}
                    className={`w-full px-4 py-2 rounded text-left mb-2 transition-colors duration-200 ${
                      selectedPersona.id === persona.id
                        ? 'bg-primary text-primary-content shadow-md'
                        : 'bg-base-100 hover:bg-base-300'
                    }`}
                  >
                    <span className="text-xl mr-2">{persona.emoji}</span>
                    {persona.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </LayoutClient>
  );
}