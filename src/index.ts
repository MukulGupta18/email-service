import express, { Request, Response } from 'express';
import { EmailService } from './EmailService';
import { MockEmailProvider1 } from './MockEmailProvider1';
import { MockEmailProvider2 } from './MockEmailProvider2';

// Initialize the app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Instantiate EmailService with mock providers
const emailService = new EmailService();

// Define the POST endpoint for sending emails
app.post('/send-email', async (req: Request, res: Response) => {
  const { to, subject, body, id } = req.body;
  
  if (!to || !subject || !body || !id) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await emailService.sendEmail(to, subject, body, id);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
