import { NextRequest, NextResponse } from "next/server";

const AUTO_REPLY_SUBJECT = "We received your message – Frexora Tech";
const AUTO_REPLY_BODY = (name: string) => `
Hello ${name},

Thank you for reaching out to Frexora Tech – Global innovation and connected solutions.

We have received your inquiry and will get back to you within 1–2 business days. If your matter is urgent, please reply to this email with "Urgent" in the subject line.

Best regards,
The Frexora Tech Team
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // In production: send email via Resend/SendGrid/etc. and store in DB.
    // For now we simulate success and return the auto-reply content so client can show it.
    const autoReply = {
      subject: AUTO_REPLY_SUBJECT,
      body: AUTO_REPLY_BODY(name.trim()),
    };

    return NextResponse.json({
      success: true,
      message: "Thank you. We will reply to your email shortly.",
      autoReply,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
