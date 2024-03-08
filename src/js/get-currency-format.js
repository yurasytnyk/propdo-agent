const symbols = ["", "k", "M", "G", "T", "P", "E"];

export function getCurrencyFormat(number) {
  if (number === 0) return number;

  const tier = Math.floor(Math.log10(Math.abs(number)) / 3);
  const suffix = symbols[tier];
  const scale = 10 ** (tier * 3);
  const scaled = number / scale;

  return (
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      currency: "USD",
      style: "currency",
    }).format(scaled) + suffix
  );
}
