import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface ChatInputProps {
  onSend: (input: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <div className="flex items-center gap-2 w-full sm:w-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded-lg border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring focus:ring-primary text-sm sm:text-base md:text-lg"
      />
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center rounded-lg bg-primary p-2 text-white hover:bg-primary/80 transition-colors duration-300"
        title="Send Message"
      >
        <FaPaperPlane size={20} />
      </button>
    </div>
  );
}
