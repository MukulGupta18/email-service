import { EmailService } from '../src/EmailService';
import { MockEmailProvider1 } from '../src/MockEmailProvider1';
import { MockEmailProvider2 } from '../src/MockEmailProvider2';

test('EmailService should retry and fallback between providers', async () => {
  const service = new EmailService();
  await service.sendEmail('test@example.com', 'Test Subject', 'Test Body', 'id1');
  // Add assertions as needed
});
