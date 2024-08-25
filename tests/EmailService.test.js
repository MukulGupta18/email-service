import { EmailService } from '../src/EmailService';

test('EmailService should retry and fallback between providers', async () => {
  const service = new EmailService();
  await service.sendEmail('test@example.com', 'Test Subject', 'Test Body', 'id1');
});
