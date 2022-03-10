type ObjectLiteral = {
  [key: string]: any;
};

const localesType: ObjectLiteral = {
  ARS: 'es-ar'
};

const formatValue = (value: number, currency: string): string =>
  Intl.NumberFormat(localesType[currency], {
    style: 'currency',
    currency
  }).format(value);

export { formatValue };
