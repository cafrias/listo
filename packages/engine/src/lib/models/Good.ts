import Entity, { EntityConstructorInput } from "./Entity";
import Category from "./Category";

interface GoodConstructorInput extends EntityConstructorInput {
  name: string;
  category: Category;
}

/**
 * Represents a good, such as "Shampoo", "Floor cleaner", "Baguette"
 */
export default class Good extends Entity {
  private name: string;
  private category: Category;

  constructor(input: GoodConstructorInput) {
    super(input);
    this.name = input.name;
    this.category = input.category;
  }

  getName(): string {
    return this.name;
  }

  getCategory(): Category {
    return this.category;
  }
}
