import ChatBox from "../components/ChatBox";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-6 md:p-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-6">
          AI Assistant Chat
        </h1>
        <div className="bg-light p-4 rounded-lg shadow-lg md:p-6">
          <ChatBox />
        </div>
      </div>
    </main>
  );
}
