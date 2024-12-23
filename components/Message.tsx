import { motion } from "framer-motion";
import { FaUserCircle, FaRobot } from "react-icons/fa";

interface MessageProps {
  role: string;
  content: string;
}

export default function Message({ role, content }: MessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-3 ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {/* Display appropriate icon for user or bot */}
      {role === "bot" ? (
        <FaRobot className="text-primary" size={24} />
      ) : (
        <FaUserCircle className="text-accent" size={24} />
      )}
      
      {/* Message bubble with responsive styling */}
      <div
        className={`max-w-full sm:max-w-xs md:max-w-md rounded-lg p-3 ${
          role === "bot" ? "bg-primary text-white" : "bg-accent text-dark"
        } shadow-md text-sm sm:text-base md:text-lg`}
      >
        {content}
      </div>
    </motion.div>
  );
}
