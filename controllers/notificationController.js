
import dotenv from 'dotenv';
import emailSender from '../utils/emailSender';


const sendNotification = async (req, res) => {
  try {
    const adminEmail = ''; // optional: fill in if needed
    const adminWhatsAPP = ''; // optional

    const to = 'amit100acre@gmail.com';
    const subject = 'Test Notification';
    const html = '<h1>This is a test email from notification service.</h1>';

    await emailSender({ to, subject, html });

    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("Notification error:", error.message);
    res.status(500).json({ message: "Notification failed" });
  }
};

export default {
  sendNotification,
};
