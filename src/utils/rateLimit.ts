export class RateLimiter {
    private lastCall = 0;
    private interval: number;
  
    constructor(interval: number) {
      this.interval = interval;
    }
  
    async wait() {
      const now = Date.now();
      if (now - this.lastCall < this.interval) {
        await new Promise(res => setTimeout(res, this.interval - (now - this.lastCall)));
      }
      this.lastCall = Date.now();
    }
  }
  