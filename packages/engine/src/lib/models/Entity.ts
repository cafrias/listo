export interface EntityConstructorInput {
  id: string;
}

/**
 * Represents a uniquely identifiable entity.
 */
export default class Entity {
  private id: string;

  constructor(input: EntityConstructorInput) {
    this.id = input.id;
  }

  getId(): string {
    return this.id;
  }
}
