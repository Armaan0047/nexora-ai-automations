import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      businessName,
      email,
      website,
      requirements,
      selectedNeeds,
      timeline,
      budget,
    } = body ?? {};

    if (!fullName || !businessName || !email) {
      return NextResponse.json({ error: "Missing required contact details." }, { status: 400 });
    }

    const botToken = process.env.NEXORA_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXORA_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Consultation delivery is not configured yet." },
        { status: 503 }
      );
    }

    const modules = Array.isArray(selectedNeeds) ? selectedNeeds.join(", ") : String(selectedNeeds ?? "");
    const text = [
      "NEW NEXORA CONSULTATION",
      "",
      `Name: ${fullName}`,
      `Business: ${businessName}`,
      `Email: ${email}`,
      `Website: ${website || "Not provided"}`,
      `Requested: ${modules || "Not specified"}`,
      `Timeline: ${timeline || "Not specified"}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Requirements:",
      requirements || "Not provided",
    ].join("\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!telegramResponse.ok) {
      return NextResponse.json({ error: "Unable to deliver the consultation request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process the consultation request." }, { status: 500 });
  }
}
