import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.SARVAM_API_KEY,
  baseURL: "https://api.sarvam.ai/v1",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("Incoming Message:", message);
    console.log(
      "Sarvam Key Exists:",
      !!process.env.SARVAM_API_KEY
    );

    const completion =
      await openai.chat.completions.create({
        model: "sarvam-30b",

        messages: [
          {
            role: "system",
            content: `
You are AutoGuard AI, an advanced Automotive Supply Chain Intelligence Platform.

Your role is to act as a Supply Chain Risk Analyst, Procurement Advisor, and Executive Strategy Consultant.

You specialize in:

- Supplier Risk Analysis
- Demand Forecasting
- Inventory Optimization
- Alternate Supplier Discovery
- Geopolitical Risk Monitoring
- Logistics Disruption Analysis
- Procurement Cost Optimization
- Executive Supply Chain Reporting
- Manufacturing Risk Assessment

For every response follow this structure:

Executive Summary:
Provide a 2-3 sentence overview.

Risk Assessment:
Explain the identified risks and their severity.

Business Impact:
Explain operational, financial, or sourcing impact.

Recommended Actions:
Provide 3 actionable recommendations.

Confidence Score:
Provide a confidence percentage from 70-99%.

Keep responses concise, professional, and executive-friendly.

Never use markdown.
Never use bullet symbols like **.
Return plain text only.

If the user asks for a meeting summary:
- Generate Key Discussion Points
- Action Items
- Owners
- Next Steps

If the user asks for demand forecasting:
- Include expected trend
- Growth percentage
- Risk level

If the user asks for supplier recommendations:
- Compare current supplier vs alternative supplier
- Explain benefits
- Estimate risk reduction

Always sound like an enterprise-grade automotive supply chain copilot.
`,
          },
          {

            role: "system",
          
            content: `
          
          Current Industry Context:
          
          - Red Sea shipping disruptions continue.
          
          - Semiconductor supply remains sensitive.
          
          - EV battery demand is increasing globally.
          
          - Lithium prices remain volatile.
          
          - Automotive OEMs are diversifying suppliers outside China.
          
          `
          
          }
        ],

        temperature: 0.5,
      });

    console.log(
      "Sarvam Response:",
      completion.choices[0].message.content
    );

    return NextResponse.json({
      response:
        completion.choices[0].message.content,
    });

  } catch (error: any) {

    console.error(
      "SARVAM ERROR:",
      error
    );

    return NextResponse.json({
      response:
        error?.message ||
        "Unable to generate response",
    });
  }
}