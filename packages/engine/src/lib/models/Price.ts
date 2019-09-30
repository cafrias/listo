export enum Currency {
  ARS = "ARS",
  USD = "USD",
}

export default interface Price {
  amount: number;
  currency: Currency;
}
