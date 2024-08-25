export class IdempotencyManager {
    private sentEmails = new Set<string>();
  
    isIdempotent(id: string): boolean {
      if (this.sentEmails.has(id)) {
        return true;
      }
      this.sentEmails.add(id);
      return false;
    }
  }
  