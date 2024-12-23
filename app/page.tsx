import ChatBox from "../components/ChatBox";

export default function Home() {
  return (
    <main className="flex w-full max-w-3xl flex-col gap-6 p-4">
      <h1 className="text-center text-3xl font-bold text-primary">
        AI Assistant Chat
      </h1>
      <ChatBox />
    </main>
  );
}
