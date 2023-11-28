"use strict";
async function mailSender(
  name: string,
  mailTo: string,
  subject: string,
  mail: string
) {
  const nodemailer = require("nodemailer");

  const Title = process.env.EMAIL_TITLE;
  const From = process.env.EMAIL_FROM;
  const Password = process.env.EMAIL_PASSWORD;
  const Host = process.env.EMAIL_HOST;
  const PortType = process.env.EMAIL_PORT;
  const SecureVal = process.env.EMAIL_SECURE;

  const Port = parseInt(`${PortType}`);
  let Secure;
  if (SecureVal === "true") {
    Secure = true;
  } else if (SecureVal === "false") {
    Secure = false;
  } else {
    Secure = SecureVal;
  }
  // console.log(description);
  // Import NodeMailer (after npm install)
  // Async function enables allows handling of promises with await
  subject = subject || "Testing Email";
  const description =
    mail ||
    `<p>We are delighted to have you as a part of Paradox BD. Our team is dedicated to providing high-quality software solutions tailored to meet your needs.</p>`;

  const recipient_email = mailTo || [
    "paradoxtechbd@outlook.com",
    // 'admin@bangladeshisoftware.com',
  ];
  console.log(recipient_email, mailTo);
  // First, define send settings by creating a new transporter:
  let transporter = nodemailer.createTransport({
    host: `${Host}`, // SMTP server address (usually mail.your-domain.com)
    port: Port, // Port for SMTP (usually 465).. sometimes: 587
    secure: Secure, // Usually true if connecting to port 465 .... false for port 587
    auth: {
      user: `${From}`, // Your email address
      pass: `${Password}`, // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `${Title} <${From}>`,
      to: `${recipient_email}`,
      subject: `${subject}`,
      html: description,
    });
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (err) {
    console.log(err);
    return err;
  }

  // Random ID generated after successful send (optional)
}

module.exports = mailSender;
// export default mailSender;
