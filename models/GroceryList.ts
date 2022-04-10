import { GroceryCategory } from "./GroceryCategory";
import { GroceryListItem } from "./GroceryListItem";

export interface GroceryList {
  items: GroceryListItem[];

  /**
   * The order in which the categories are displayed
   * in this list.
   */
  order: GroceryCategory[];
}

/**
 * A group of GroceryListItems by Category
 */
export interface GroceryListGroup {
  category: GroceryCategory;
  items: GroceryListItem[];
}

/**
 * Groups the grocery list by Category given its internal
 * sorting order. 
 */
export function groceryListGroupByCategory(list: GroceryList): GroceryListGroup[] {
  const groups: Record<string, undefined | GroceryListItem[]> = {};
  for (const item of list.items) {
    const group = groups[item.category];
    if(group) {
      group.push(item)
    } else {
      groups[item.category] = [item]
    }
  }

  return list.order.reduce<GroceryListGroup[]>((acc, ord) => {
    const group = groups[ord];
    if (group) {
      acc.push({ category: ord, items: group })
    }
    return acc
  }, []);
}
