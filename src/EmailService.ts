import { EmailProvider } from './EmailProvider';
import { MockEmailProvider1 } from './MockEmailProvider1';
import { MockEmailProvider2 } from './MockEmailProvider2';
import { retry } from './utils/retry';
import { RateLimiter } from './utils/rateLimit';
import { IdempotencyManager } from './utils/idempotency';

export class EmailService {
  private providers: EmailProvider[] = [new MockEmailProvider1(), new MockEmailProvider2()];
  private currentProviderIndex = 0;
  private rateLimiter = new RateLimiter(1000); // 1 second rate limit
  private idempotencyManager = new IdempotencyManager();

  async sendEmail(to: string, subject: string, body: string, id: string): Promise<void> {
    if (this.idempotencyManager.isIdempotent(id)) {
      console.log('Duplicate email detected, skipping send.');
      return;
    }
  
    await this.rateLimiter.wait();
  
    const sendEmailAttempt = async (provider: EmailProvider) => {
      await retry(
        () => provider.sendEmail(to, subject, body),
        3, // number of retries
        1000 // initial delay in milliseconds
      );
    };
  
    while (this.currentProviderIndex < this.providers.length) {
      const provider = this.providers[this.currentProviderIndex];
      try {
        await sendEmailAttempt(provider);
        console.log('Email sent successfully');
        return;
      } catch (error) {
        // Type assertion to handle specific error types
        if (error instanceof Error) {
          console.error(`Provider ${this.currentProviderIndex} failed: ${error.message}`);
        } else {
          console.error(`Provider ${this.currentProviderIndex} failed: Unknown error`);
        }
        this.currentProviderIndex++;
        if (this.currentProviderIndex >= this.providers.length) {
          console.error('All providers failed');
          throw new Error('All providers failed');
        }
      }
    }
  }
}  