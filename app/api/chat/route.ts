import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.SARVAM_API_KEY,
  baseURL: "https://api.sarvam.ai/v1",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("MESSAGE:", message);
    console.log(
      "SARVAM KEY EXISTS:",
      !!process.env.SARVAM_API_KEY
    );

    const completion =
      await openai.chat.completions.create({
        model: "sarvam-30b",

        messages: [
          {
            role: "system",
            content: `
You are AutoGuard AI.

You are an AI copilot built for automotive and industrial supply chains.

Your job is to help users make better sourcing, procurement and supply chain decisions.

You can:

- Evaluate suppliers
- Compare suppliers
- Analyze sourcing risks
- Assess geopolitical risks
- Analyze countries and regions
- Recommend alternate suppliers
- Explain logistics disruptions
- Forecast procurement challenges
- Analyze inventory strategies
- Provide executive-level supply chain advice

When users ask about a supplier, company, manufacturer or country:

- Explain benefits
- Explain risks
- Mention potential concerns
- Suggest alternatives if appropriate
- Provide practical recommendations

If the user asks:
"Should I source from X?"

Provide a clear recommendation with reasoning.

Keep responses concise, practical and business focused.

Act like a real enterprise supply chain advisor.

IMPORTANT:

Return plain text only.

Never use:
#
##
###
**
***
---
markdown tables

Do not use markdown formatting.

Use simple paragraphs and numbered lists only.

`,
          },
          {
            role: "user",
            content: message,
          },
        ],

        temperature: 0.7,
      });

    console.log(
      "FULL RESPONSE:",
      JSON.stringify(completion, null, 2)
    );

    const reply =
  completion?.choices?.[0]?.message?.content || "";

const cleanReply = reply
  .replace(/#{1,6}\s/g, "")
  .replace(/\*\*/g, "")
  .replace(/\*/g, "")
  .replace(/---/g, "")
  .replace(/`/g, "")
  .trim();

return NextResponse.json({
  response: cleanReply || "No response generated",
});

  } catch (error: any) {

    console.error(
      "SARVAM ERROR:",
      error
    );

    return NextResponse.json({
      response:
        error?.message ||
        JSON.stringify(error) ||
        "Unable to generate response",
    });
  }
}
