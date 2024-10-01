import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API Key
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      const msg = {
        to: process.env.NEXT_PUBLIC_SENDGRID_RECEIVER_EMAIL, // Your email address (recipient)
        from: {
          email:
            process.env.NEXT_PUBLIC_SENDGRID_SENDER_EMAIL ||
            "default@example.com",
          name: "Oluwasegun Emmanuel",
        },
        subject: `New message from ${name} via Portfolio Contact Form`,
        text: `You received a message from ${name} (${email}):\n\n${message}`,
        html: `
          <strong>New message from your portfolio:</strong><br><br>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br> ${message}</p>
        `,
      };
      console.log(msg)

      // Send email via SendGrid
      await sgMail.send(msg);

      return res.status(200).json({ success: "Message sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Error sending message, please try again." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
