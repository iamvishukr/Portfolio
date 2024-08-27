import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userEmail, userName, message } = req.body;

    const emailData = {
      from: userEmail,
      to: "your_recipient_email@example.com", // Replace with your recipient email
      subject: "New Contact Us Message",
      html: `
        <h2>You got a new message from ${userName}:</h2>
        <p>${message}</p>
        <p>User Email: ${userEmail}</p>
      `,
    };

    try {
      const response = await axios.post("https://api.resend.com/emails", emailData, {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        res.status(200).json({ message: "Email sent successfully!" });
      } else {
        res.status(response.status).json({ error: "Failed to send email." });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
