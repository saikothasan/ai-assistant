"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { FaSpinner } from "react-icons/fa";

export default function ChatBox() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "bot", content: "Hello! How can I assist you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (input: string) => {
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { role: "bot", content: data.response }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: "Sorry, I couldn't process that." },
        ]);
      }
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "An error occurred. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] w-full rounded-lg bg-light shadow-xl p-4 md:max-w-xl mx-auto transition-all duration-300 ease-in-out">
      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto space-y-4 px-2 py-4 md:px-4 md:py-6">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}
        {isLoading && (
          <div className="flex justify-center mt-2">
            <FaSpinner className="animate-spin text-primary" size={24} />
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="mt-4">
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}
