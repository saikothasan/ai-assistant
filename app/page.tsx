import ChatBox from "../components/ChatBox";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-4xl font-bold text-primary mb-6">
          AI Assistant Chat
        </h1>
        <ChatBox />
      </div>
    </main>
  );
}
