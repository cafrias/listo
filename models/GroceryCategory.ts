export enum GroceryCategory {
  Vegetables = 'Vegetables',
  Diary = 'Diary',
  Drinks = 'Drinks',
  Nonperishable = 'Nonperishable',
  Spices = 'Spices',
  Bakery = 'Bakery',
  Frozen = 'Frozen',
  Meat = 'Meat',
  Cleaning = 'Cleaning',
  PersonalCare = 'Personal Care',
  Other = 'Other',
}

export const DEFAULT_CATEGORY_ORDER = Object.values(GroceryCategory);
