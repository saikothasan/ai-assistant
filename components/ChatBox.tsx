"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

export default function ChatBox() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "bot", content: "Hello! How can I assist you today?" },
  ]);

  const sendMessage = async (input: string) => {
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: "Sorry, I couldn't process that." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "An error occurred. Please try again later." },
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
