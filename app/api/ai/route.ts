import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://hello-ai.aicodegen.workers.dev/?prompt=${encodeURIComponent(prompt)}`
    );
    const data = await res.text();

    return NextResponse.json({ reply: data });
  } catch (err) {
    console.error("API Error:", err); // Log the error for debugging
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
