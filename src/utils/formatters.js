export function formatTrillions(value) {
  return `${(value / 1_000_000_000_000).toFixed(2)}T`;
}
export function formatBillions(value) {
  return `${(value / 1_000_000_000).toFixed(2)}B`;
}
