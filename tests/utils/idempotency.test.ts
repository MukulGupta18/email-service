import { IdempotencyManager } from '../../src/utils/idempotency';

test('IdempotencyManager should prevent duplicate sends', () => {
  const manager = new IdempotencyManager();
  expect(manager.isIdempotent('id1')).toBe(false);
  expect(manager.isIdempotent('id1')).toBe(true);
});
