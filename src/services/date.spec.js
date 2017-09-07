import parseDate from './date';

test('parseDate', () => {
  const date = parseDate(new Date(1485012688180));
  expect(date).toBe('2017-01-21');
});
