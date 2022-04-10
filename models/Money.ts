import { Currency, CurrencyMultiplier } from "./Currency";

export interface Money {
  currency: Currency;

  /**
   * The amount of money as an integer to be later divided
   * by CurrencyMultiplier to get the amount of units.
   * 
   * For example, if the Money is in USD, this value represents
   * the number of Cents, the multiplier will be 100. So to get
   * the actual number of USD you need to divide by that multiplier.
   */
  amount: number;
}

/**
 * Returns the unit amount of money.
 */
export function moneyGetAmount(money: Money): number {
  return money.amount / CurrencyMultiplier[money.currency];
}
