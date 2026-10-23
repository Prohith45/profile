import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { error: 'Server email configuration is missing' },
        { status: 500 }
      );
    }

    const emailUser = process.env.EMAIL_USER.trim();
    const emailPass = process.env.EMAIL_PASS.replace(/\s+/g, '');
    const emailTo = process.env.EMAIL_TO?.trim() || emailUser || 'papanarohith45@gmail.com';

    // Configure SMTP transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name} (Portfolio)" <${emailUser}>`,
      to: emailTo, // Recipient
      replyTo: email, // Set reply-to to the sender's email
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00e5ff;">New Portfolio Signal Received</h2>
          <p><strong>Transmitter Name:</strong> ${name}</p>
          <p><strong>Transmitter Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Payload:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Signal transmitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to transmit signal' },
      { status: 500 }
    );
  }
}
