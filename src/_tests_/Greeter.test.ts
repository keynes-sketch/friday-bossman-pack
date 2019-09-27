import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Keynes Noah')).toBe('Friday Bossman Keynes Noah');
});