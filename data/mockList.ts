import { DEFAULT_CATEGORY_ORDER, GroceryCategory } from "../models/GroceryCategory";
import { GroceryList } from "../models/GroceryList";
import { MeasurementUnit } from "../models/Measurement";

export const mockList: GroceryList = {
  order: DEFAULT_CATEGORY_ORDER,
  items: [
    {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: '1',
      name: 'Bottled Water',
      category: GroceryCategory.Drinks
    },
    {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: '2',
      name: 'Steak',
      amount: {
        amount: 1,
        unit: MeasurementUnit.Kilogram
      },
      category: GroceryCategory.Meat
    },
    {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: '3',
      name: 'Wine',
      amount: {
        amount: 2,
        unit: MeasurementUnit.Unit
      },
      category: GroceryCategory.Drinks
    },
  ]
}