import { EmailService } from './EmailService';

class QueueItem {
  constructor(
    public to: string,
    public subject: string,
    public body: string,
    public id: string
  ) {}
}

export class EmailQueue {
  private queue: QueueItem[] = [];
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
    this.processQueue();
  }

  enqueue(to: string, subject: string, body: string, id: string) {
    this.queue.push(new QueueItem(to, subject, body, id));
  }

  private async processQueue() {
    while (true) {
      if (this.queue.length > 0) {
        const item = this.queue.shift()!;
        await this.emailService.sendEmail(item.to, item.subject, item.body, item.id);
      }
      await new Promise(res => setTimeout(res, 1000)); // Wait before checking the queue again
    }
  }
}
