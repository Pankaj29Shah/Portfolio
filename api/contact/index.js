const sgMail = require("@sendgrid/mail");

module.exports = async function (context, req) {
  // Set CORS headers
  context.res = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { name, email, subject, message } = req.body || {};

  // Validate input
  if (!name || !email || !subject || !message) {
    context.res.status = 400;
    context.res.body = { message: "All fields are required" };
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    context.res.status = 400;
    context.res.body = { message: "Invalid email format" };
    return;
  }

  // Check if SendGrid credentials are configured
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
    context.res.status = 200;
    context.res.body = {
      message: "Message received! (Email service not configured)",
      demo: true,
    };
    return;
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const toEmail = process.env.EMAIL_TO || fromEmail;

  // Email to yourself (notification)
  const notificationEmail = {
    to: toEmail,
    from: { email: fromEmail, name: "Pankaj Shah Portfolio" },
    replyTo: email,
    subject: `New Message from ${name} - ${subject}`,
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
          </div>
        </div>
      </div>
    `,
  };

  // Auto-reply to the sender
  const autoReplyEmail = {
    to: email,
    from: { email: fromEmail, name: "Pankaj Shah" },
    replyTo: fromEmail,
    subject: "Thank you for contacting Pankaj Shah",
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
          <p style="line-height: 1.6; color: #333;">I typically respond within 24-48 hours.</p>
          <p style="line-height: 1.6; color: #333;">
            Best regards,<br>
            <strong>Pankaj Shah</strong><br>
            Full Stack Software Developer
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="margin: 5px 0; color: #666;">
              <a href="mailto:pankajshah2941999@gmail.com" style="color: #667eea;">pankajshah2941999@gmail.com</a>
            </p>
            <p style="margin: 5px 0; color: #666;">
              <a href="https://linkedin.com/in/ps29/" style="color: #667eea;">linkedin.com/in/ps29/</a>
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await sgMail.send(notificationEmail);
    await sgMail.send(autoReplyEmail);

    context.res.status = 200;
    context.res.body = { message: "Message sent successfully!" };
  } catch (error) {
    context.log.error("SendGrid error:", error);
    context.res.status = 500;
    context.res.body = { message: "Failed to send message. Please try again later." };
  }
};
