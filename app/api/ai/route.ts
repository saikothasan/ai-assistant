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
    const data = await res.json(); // Parsing JSON response

    return NextResponse.json({ response: data.response }); // Forward the response field
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
