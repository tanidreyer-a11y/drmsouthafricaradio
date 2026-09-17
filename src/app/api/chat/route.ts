import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/knowledge-base";

export const runtime = "nodejs";

type ClientMessage = { role: "user" | "assistant"; content: string };

const MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";
const MAX_HISTORY = 12;
const MAX_MESSAGE_LEN = 1200;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "The AI assistant isn't configured yet. Add a GEMINI_API_KEY in the project's environment variables to turn it on. In the meantime, reach us directly at info@drmsa.org or +27 76 504 7794.",
      },
      { status: 200 }
    );
  }

  let body: { messages?: ClientMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ reply: "Sorry, that message couldn't be read." }, { status: 200 });
  }

  const messages = (body.messages || [])
    .filter((m) => m && typeof m.content === "string" && m.content.trim().length > 0)
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content.slice(0, MAX_MESSAGE_LEN) }],
    }));

  if (messages.length === 0) {
    return NextResponse.json({ reply: "Ask me anything about DRM SA." }, { status: 200 });
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: messages,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 400,
          },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API error", res.status, errText);
      return NextResponse.json(
        {
          reply:
            "Sorry, the assistant is temporarily unavailable. Please try again shortly, or email info@drmsa.org.",
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    const reply: string =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") ||
      "Sorry, I couldn't generate a response. Please try rephrasing, or email info@drmsa.org.";

    return NextResponse.json({ reply: reply.trim() });
  } catch (err) {
    console.error("Chat route error", err);
    return NextResponse.json(
      {
        reply:
          "Sorry, something went wrong reaching the assistant. Please try again, or email info@drmsa.org.",
      },
      { status: 200 }
    );
  }
}
