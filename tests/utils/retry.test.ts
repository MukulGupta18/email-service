import { retry } from '../../src/utils/retry';

test('Retry should retry on failure', async () => {
  let attempts = 0;
  const failingFn = async () => {
    attempts++;
    if (attempts < 3) throw new Error('Fail');
  };

  await retry(failingFn, 3, 100);
  expect(attempts).toBe(3);
});
