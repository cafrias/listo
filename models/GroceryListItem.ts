import { Entity } from "./Entity";
import { Measurement } from "./Measurement";
import { Money } from "./Money";

export interface GroceryListItem extends Entity {
  name: string;
  amount?: Measurement;
  brand?: string;
  price?: Money;
  image?: string;
}