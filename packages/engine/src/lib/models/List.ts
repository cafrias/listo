import Entity, { EntityConstructorInput } from "./Entity";
import Product from "./Product";
import Segment from "./Segment";

interface ListConstructorInput extends EntityConstructorInput {
  name: string;
  products?: Product[];
  segments?: Segment[];
}

export default class List extends Entity {
  private name: string;
  private products: Product[];
  private segments: Segment[];

  constructor(input: ListConstructorInput) {
    super(input);
    this.name = input.name;
    this.products = input.products || [];
    this.segments = input.segments || [];
  }

  getName(): string {
    return this.name;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getSegments(): Segment[] {
    return this.segments;
  }
}
