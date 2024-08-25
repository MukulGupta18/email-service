export async function retry<T>(fn: () => Promise<T>, retries: number, delay: number): Promise<T> {
    let attempt = 0;
    while (attempt < retries) {
      try {
        return await fn();
      } catch (error) {
        attempt++;
        if (attempt >= retries) throw error;
        await new Promise(res => setTimeout(res, delay * Math.pow(2, attempt)));
      }
    }
    throw new Error('Failed after retries');
  }
  