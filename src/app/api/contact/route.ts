import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO_EMAIL = "prockets.team@enactusunsw.org";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  help?: string;
  affiliation?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body?.name || !body?.email || !body?.help) {
    return NextResponse.json(
      { error: "Name, email, and how you can help are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form submission received but RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Prockets Contact Form <contact@prockets.au>",
    to: CONTACT_TO_EMAIL,
    replyTo: body.email,
    subject: `New contact form submission from ${body.name}`,
    text: [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || "—"}`,
      `Professional affiliation: ${body.affiliation || "—"}`,
      "",
      "How can you help?",
      body.help,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
