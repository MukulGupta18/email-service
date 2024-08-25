import { EmailProvider } from './EmailProvider';

export class MockEmailProvider2 implements EmailProvider {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`MockProvider2: Sending email to ${to}`);
    // Simulate email sending with 50% chance of failure
    if (Math.random() < 0.5) {
      throw new Error('MockProvider2 failed');
    }
  }
}
