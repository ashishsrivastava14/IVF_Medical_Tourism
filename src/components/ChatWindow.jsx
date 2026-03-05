import { useState } from 'react';
import { Send, X } from 'lucide-react';

export default function ChatWindow({ messages: initialMessages, onClose }) {
  const [messages, setMessages] = useState(initialMessages || []);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, {
      id: `M-${Date.now()}`,
      from: 'patient',
      name: 'You',
      text: input.trim(),
      timestamp: new Date().toISOString(),
      read: true,
    }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-primary-50">
        <h3 className="font-semibold text-primary-800">Patient Coordinator</h3>
        {onClose && <button onClick={onClose}><X className="w-5 h-5 text-gray-500" /></button>}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.from === 'patient' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm ${msg.from === 'patient' ? 'bg-primary-500 text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'}`}>
              <p className="font-medium text-xs mb-1 opacity-70">{msg.name}</p>
              <p>{msg.text}</p>
              <p className="text-[10px] mt-1 opacity-50">{new Date(msg.timestamp).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Type a message…"
          className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
        <button onClick={send} className="btn-primary p-2"><Send className="w-4 h-4" /></button>
      </div>
    </div>
  );
}
