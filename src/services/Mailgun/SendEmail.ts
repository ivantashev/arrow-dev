"use server";

import formData from "form-data";
import Mailgun from "mailgun.js";

export default async function sendEmail(
    emailTo: string,
    subject: string,
    text: string,
    html?: string,
): Promise<boolean> {
  const mailgun = new Mailgun(formData);

  const client = mailgun.client({
    url: process.env.MAILGUN_API_URL,
    username: "api",
    key: process.env.MAILGUN_SECRET ?? '',
  });

  const messageData = {
    from: process.env.FROM_EMAIL,
    to: emailTo,
    subject: process.env.NEXT_PUBLIC_IS_PRODUCTION === "true" ? "" : `DEV ${subject}`,
    text: text,
    html: html,
  };

  try {
    await client.messages.create(process.env.MAILGUN_DOMAIN ?? 'https://api.mailgun.net/', messageData);

    return true;
  } catch (err) {
    console.error(err);
  }

  return false;
}
