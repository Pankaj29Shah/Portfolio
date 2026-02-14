import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SendGrid credentials are configured
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
      console.error('SendGrid credentials not configured');
      return NextResponse.json(
        {
          message: 'Message received! (Email service not configured - check .env file)',
          demo: true
        },
        { status: 200 }
      );
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.EMAIL_TO || fromEmail;

    // Email to yourself (notification)
    const notificationEmail = {
      to: toEmail,
      from: {
        email: fromEmail,
        name: 'Pankaj Shah Portfolio'
      },
      replyTo: email, // Allow direct reply to the sender
      subject: `New Message from ${name} - ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your portfolio contact form.
Reply directly to respond to ${name}.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px;">New Contact Form Submission</h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #333;">Message:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #888; font-size: 12px;">
              <p>This email was sent from your portfolio contact form.</p>
              <p>Reply directly to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply to the sender
    const autoReplyEmail = {
      to: email,
      from: {
        email: fromEmail,
        name: 'Pankaj Shah'
      },
      replyTo: fromEmail,
      subject: 'Thank you for contacting Pankaj Shah',
      text: `
Hi ${name},

Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.

Your Message:
Subject: ${subject}
${message}

I typically respond within 24-48 hours. In the meantime, feel free to check out my projects and connect with me on LinkedIn.

Best regards,
Pankaj Shah
Full Stack Software Developer

Email: pankajshah2941999@gmail.com
LinkedIn: linkedin.com/in/ps29/
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #667eea;">Thank You for Reaching Out!</h2>

            <p style="line-height: 1.6; color: #333;">Hi ${name},</p>

            <p style="line-height: 1.6; color: #333;">
              Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.
            </p>

            <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>

            <p style="line-height: 1.6; color: #333;">
              I typically respond within 24-48 hours. In the meantime, feel free to check out my projects and connect with me on LinkedIn.
            </p>

            <p style="line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong>Pankaj Shah</strong><br>
              Full Stack Software Developer
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="margin: 5px 0; color: #666;">
                📧 <a href="mailto:pankajshah2941999@gmail.com" style="color: #667eea;">pankajshah2941999@gmail.com</a>
              </p>
              <p style="margin: 5px 0; color: #666;">
                💼 <a href="https://linkedin.com/in/ps29/" style="color: #667eea;">linkedin.com/in/ps29/</a>
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await sgMail.send(notificationEmail);
    await sgMail.send(autoReplyEmail);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
