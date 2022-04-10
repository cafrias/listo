import { Entity } from "./Entity";
import { GroceryCategory } from "./GroceryCategory";
import { Measurement } from "./Measurement";
import { Money } from "./Money";

export interface GroceryListItem extends Entity {
  name: string;
  category: GroceryCategory;
  amount?: Measurement;
  brand?: string;
  price?: Money;
  image?: string;
}