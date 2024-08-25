import { EmailProvider } from './EmailProvider';

export class MockEmailProvider1 implements EmailProvider {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`MockProvider1: Sending email to ${to}`);
    // Simulate email sending with 50% chance of failure
    if (Math.random() < 0.5) {
      throw new Error('MockProvider1 failed');
    }
  }
}
