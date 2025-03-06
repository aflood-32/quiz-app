interface CurrencyFormatters {
  [currency: string]: Intl.NumberFormat;
}

const currencyFormatters: CurrencyFormatters = {};

const formatCurrency = (
  value: string | number,
  currency: string,
  minimumFractionDigits = 0,
): string => {
  let formatter = currencyFormatters[currency];

  if (!formatter) {
    formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currencyDisplay: "narrowSymbol",
      currency,
      minimumFractionDigits,
    });

    currencyFormatters[currency] = formatter;
  }

  return formatter.format(Number(value));
};

export { formatCurrency };
