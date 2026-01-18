import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { aiProfile } from "@/app/data/aiProfile";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // 🔒 Ensure messages are valid
    const safeMessages = messages.filter(
      (m) => m.role && typeof m.content === "string"
    );

    const result = await generateText({
      model: groq("llama-3.1-8b-instant"), // ✅ ACTIVE + FREE
      system: aiProfile,
      messages: safeMessages,
    });

    return new Response(
      JSON.stringify({ reply: result.text }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("AI Error:", err);
    return new Response(
      JSON.stringify({ error: "AI failed" }),
      { status: 500 }
    );
  }
}
