import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;

    if (!apiKey || !from || !to) {
      console.error('Missing Resend configuration');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const subject = `New contact form submission${name ? ` from ${name}` : ''}`;
    const text = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, text }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend error', errText);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

