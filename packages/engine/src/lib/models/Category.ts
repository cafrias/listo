import Entity, { EntityConstructorInput } from "./Entity";

interface CategoryConstructorInput extends EntityConstructorInput {
  name: string;
}

/**
 * Represents a Goods category, such as "Personal Care", "Bakery", "House Cleaning"
 */
export default class Category extends Entity {
  /**
   * The name of this category
   */
  private name: string;

  constructor(input: CategoryConstructorInput) {
    super(input);
    this.name = input.name;
  }

  getName(): string {
    return this.name;
  }
}
