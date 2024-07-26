'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import LayoutClient from '@/components/LayoutClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { writingPersonas, personaTerms, initalWelcomeMessage } from './writingPersonas';
import config from '@/config';

const personaDescriptions = {
  motivator: "An enthusiastic cheerleader who keeps writers inspired and moving forward.",
  critic: "An analytical mind who provides constructive feedback to elevate your writing.",
  innovator: "A creative thinker who pushes boundaries and sparks unique ideas.",
  mentor: "An experienced sage who shares wisdom from years in the writing world.",
  editor: "A sharp-eyed professional who refines and polishes written work to perfection.",
  research: "A dedicated expert providing factual, research-based input to enhance the authenticity and depth of speculative fiction.",
};

const writerLevels = ['Beginner', 'Intermediate', 'Advanced'];

const FREE_MESSAGE_LIMIT = 5; // Set the message limit for free users

export default function PersonaChatClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedPersona, setSelectedPersona] = useState(writingPersonas[0]);
  const { data: session, status } = useSession();
  const [writerLevel, setWriterLevel] = useState('Intermediate');
  const router = useRouter();
  const [hasPaid, setHasPaid] = useState(false);
  const [isPaymentLoaded, setIsPaymentLoaded] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const MAX_WORDS = 50000;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', config.colors.personaChatTheme);
    
    if (typeof window !== 'undefined') {
      const initialHasPaid = window.initialHasPaid;
      setHasPaid(initialHasPaid);
      setIsPaymentLoaded(true);
    }
    
    const mentorPersona = writingPersonas.find(persona => persona.id === 'mentor');
    if (mentorPersona && messages.length === 0) {
      const initialMessage = {
        role: 'persona',
        content: hasPaid 
          ? initalWelcomeMessage.paidWelcomeMessage 
          : initalWelcomeMessage.freeWelcomeMessage.replace(/{FREE_MESSAGE_LIMIT}/g, FREE_MESSAGE_LIMIT),
        personaName: mentorPersona.name,
        personaEmoji: mentorPersona.emoji
      };
      setMessages([initialMessage]);
    }
    
    return () => {
      document.documentElement.setAttribute('data-theme', config.colors.theme);
    };
  }, []);

  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    if (messageCount >= FREE_MESSAGE_LIMIT && !hasPaid) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'You have reached the message limit for the free version. Please upgrade to continue using the service.',
      }]);
      return;
    }

    const wordCount = countWords(inputMessage);

    if (wordCount > MAX_WORDS) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: `Your message exceeds the maximum word limit. Please shorten your message.`,
      }]);
      setInputMessage('');
      return;
    }

    const newMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);
    setMessageCount(prevCount => prevCount + 1);

    try {
      const response = await fetch('/api/persona', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: session?.user?.id,
          message: inputMessage,
          persona: selectedPersona.id,
          prompt: selectedPersona.prompt,
          writerLevel: writerLevel
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
    } finally {
      setIsLoading(false);
    }
  };

  if (!isPaymentLoaded) {
    return (
      <LayoutClient>
        <Header />
        <div className="max-w-6xl mx-auto p-4 bg-base-100">
          <h1 className="text-3xl font-bold text-primary mb-4">{personaTerms.plural} Chat</h1>
          <div className="flex justify-center items-center h-[50vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
          </div>
        </div>
        <Footer />
      </LayoutClient>
    );
  }

  return (
    <LayoutClient>
      <Header />
      <div className="max-w-6xl mx-auto p-4 bg-base-100">
        <h1 className="text-3xl font-bold text-primary mb-4">{personaTerms.plural} Chat </h1>
        
        {!hasPaid && (
          <div className="bg-warning text-warning-content p-4 rounded-lg mb-4">
            <p>You are using the free version. {FREE_MESSAGE_LIMIT - messageCount} messages remaining.</p>
            <button 
              onClick={() => router.push('/#pricing')} 
              className="btn btn-primary mt-2"
            >
              Upgrade for Unlimited Access
            </button>
          </div>
        )}
        
        <div className="flex">
          {/* Chat Section */}
          <div className="flex-grow mr-4">
            <div className="bg-base-200 shadow-lg rounded-lg p-4 h-[70vh] overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-neutral text-neutral-content' 
                      : 'bg-base-300 text-base-content'
                  }`}>
                    {msg.role === 'persona' && (
                      <div className="font-bold mb-1">
                        {msg.personaEmoji} {msg.personaName}
                      </div>
                    )}
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="whitespace-pre-wrap">{children}</p>,
                      }}
                      className="prose max-w-none break-words"
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              )}
            </div>
            <form onSubmit={sendMessage} className="flex space-x-2 mt-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow p-2 input input-bordered input-primary"
                placeholder="Type your message..."
                disabled={messageCount >= FREE_MESSAGE_LIMIT && !hasPaid}
              />
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isLoading || (messageCount >= FREE_MESSAGE_LIMIT && !hasPaid)}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Persona Selection and Writer's Level Section */}
          <div className="w-64 flex-shrink-0 space-y-4">
            {/* Current Persona Display */}
            <div className="p-4 bg-base-200 text-base-content rounded-lg shadow-md">
              <div className="font-bold text-lg mb-2">Current {personaTerms.singular}</div>
              <div className="mt-2 p-2 bg-base-100 rounded flex items-center">
                <span className="text-2xl mr-2">{selectedPersona.emoji}</span>
                <span className="font-bold">{selectedPersona.name}</span>
              </div>
              <div className="mt-2 text-sm">
                {personaDescriptions[selectedPersona.id]}
              </div>
            </div>

            <div className="bg-base-200 rounded-lg shadow-md flex-grow flex flex-col">
              <h2 className="text-lg font-semibold p-3 bg-base-300 rounded-t-lg">
                Select a {personaTerms.singular}
              </h2>
              <div className="overflow-y-auto p-2 flex-grow">
                {writingPersonas.map(persona => (
                  <button
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona)}
                    className={`w-full px-4 py-2 rounded text-left mb-2 transition-colors duration-200 flex items-center ${
                      selectedPersona.id === persona.id
                        ? 'bg-primary text-primary-content shadow-md'
                        : 'bg-base-100 hover:bg-base-300'
                    }`}
                  >
                    <span className="text-xl mr-2">{persona.emoji}</span>
                    <span className="text-sm">{persona.name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Writer's Level Selection */}
            <div className="p-4 bg-base-200 text-base-content rounded-lg shadow-md">
              <div className="font-bold text-lg mb-2">Writer&apos;s Level</div>
              <select 
                value={writerLevel} 
                onChange={(e) => setWriterLevel(e.target.value)}
                className="select select-primary w-full max-w-xs"
              >
                {writerLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </LayoutClient>
  );
}