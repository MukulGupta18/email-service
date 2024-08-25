import { RateLimiter } from '../../src/utils/rateLimit';

describe('RateLimiter', () => {
  it('should limit requests according to the specified rate limit', async () => {
    const rateLimiter = new RateLimiter(1000); // 1 request per second

    const start = Date.now();
    
    await rateLimiter.wait(); // Should pass immediately
    expect(Date.now() - start).toBeLessThan(1000);
    
    await rateLimiter.wait(); // Should pass after 1 second
    expect(Date.now() - start).toBeGreaterThan(1000);
  });
});
