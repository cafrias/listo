import Entity, { EntityConstructorInput } from "./Entity";
import Good from "./Good";

interface SegmentConstructorInput extends EntityConstructorInput {
  name: string;
  good: Good;
}

/**
 * Represents a Good Segment, such as: "Premium", "Low cost", "Average".
 */
export default class Segment extends Entity {
  private name: string;
  private good: Good;

  constructor(input: SegmentConstructorInput) {
    super(input);
    this.name = input.name;
    this.good = input.good;
  }

  getName(): string {
    return this.name;
  }

  getGood(): Good {
    return this.good;
  }
}
