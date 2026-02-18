import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { chatWithChemist } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: 'Hello! I am your AI Lab Assistant. Ask me about chemical reactions, safety protocols, or research summaries.', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await chatWithChemist(inputValue, messages.map(m => m.text));

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-academic-accent hover:bg-academic-accentHover text-white p-4 rounded-full shadow-lg shadow-cyan-900/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <Sparkles className="h-6 w-6 animate-pulse" />
          <span className="absolute right-full mr-3 bg-academic-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
            Ask AI Assistant
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-academic-800 border border-white/20 rounded-2xl w-80 sm:w-96 shadow-2xl flex flex-col overflow-hidden h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-academic-900 to-slate-900 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="text-academic-accent h-5 w-5" />
              <h3 className="font-semibold text-white">Lab Assistant AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-academic-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-academic-accent text-white rounded-br-none'
                      : 'bg-academic-800 text-slate-200 border border-white/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-academic-800 p-2 rounded-lg rounded-bl-none flex items-center gap-2 text-slate-400 text-xs">
                  <Loader2 className="animate-spin h-3 w-3" /> Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-academic-800 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about reactions, safety..."
                className="flex-1 bg-academic-900 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-academic-accent"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-academic-accent hover:bg-academic-accentHover disabled:opacity-50 text-white p-2 rounded-full transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;