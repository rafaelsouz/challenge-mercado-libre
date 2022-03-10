type ObjectLiteral = {
  [key: string]: any;
};

const localesType: ObjectLiteral = {
  ARS: 'es-ar'
};

const formatValue = (
  value: number,
  currency: string,
  decimal?: number
): string => {
  let valueWithDecimals = value;

  if (decimal) {
    valueWithDecimals = value + decimal / 100;
  }

  return Intl.NumberFormat(localesType[currency], {
    style: 'currency',
    currency
  }).format(valueWithDecimals);
};

export { formatValue };
