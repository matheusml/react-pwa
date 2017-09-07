export default function parseDate(date) {
  return new Date(date).toISOString().split('T')[0];
}
