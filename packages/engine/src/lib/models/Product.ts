import Entity, { EntityConstructorInput } from "./Entity";
import Segment from "./Segment";
import Price from "./Price";

interface ProductConstructorInput extends EntityConstructorInput {
  brand: string;
  segment: Segment;
  price: Price;
}

/**
 * A brand represents a Good that has been manufactured by a given Brand.
 */
export default class Product extends Entity {
  private brand: string;
  private segment: Segment;
  private price: Price;

  constructor(input: ProductConstructorInput) {
    super(input);
    this.brand = input.brand;
    this.segment = input.segment;
    this.price = input.price;
  }

  getBrand(): string {
    return this.brand;
  }

  getSegment(): Segment {
    return this.segment;
  }

  getPrice(): Price {
    return this.price;
  }
}
