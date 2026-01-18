"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AIAssistantDark() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Arnav's AI assistant. Tell me about your project idea and I'll let you know how I can help.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      className="flex flex-col h-[600px] w-full max-w-2xl border border-gray-700 rounded-md bg-black text-green-400 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="px-4 py-3 border-b border-gray-700">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-xs text-gray-400">chat_system.sh</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm font-mono">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded text-xs leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-green-600 text-black"
                  : "text-green-400"
              }`}
            >
              {m.role === "assistant" && <span className="text-green-500">{">"} </span>}
              {m.content}
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="text-xs text-green-400 flex items-center gap-2">
            <span className="text-green-500">{">"} </span>
            <span className="animate-pulse">processing...</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form onSubmit={sendMessage} className="px-4 py-3 border-t border-gray-700 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command..."
          disabled={loading}
          className="flex-1 border border-gray-700 rounded px-3 py-2 text-xs bg-black text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-400 font-mono"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-black px-4 py-2 rounded text-xs font-semibold hover:bg-green-500 disabled:opacity-50 transition-colors"
        >
          {loading ? "..." : "exec"}
        </button>
      </form>
    </motion.div>
  );
}
