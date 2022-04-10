import React, { useMemo } from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import {
  GroceryList,
  groceryListGroupByCategory,
} from "../../models/GroceryList";

interface GroceryListComponentProps {
  list: GroceryList;
}

/**
 * Renders a GroceryList
 */
export function GroceryListComponent({ list }: GroceryListComponentProps) {
  const groupedList = useMemo(() => {
    return groceryListGroupByCategory(list);
  }, [list]);

  return (
    <Accordion defaultActiveKey={list.order} alwaysOpen>
      {groupedList.map((group) => {
        return (
          <React.Fragment key={group.category}>
            <Accordion.Item eventKey={group.category}>
              <Accordion.Header>{group.category}</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  {group.items.map((item) => {
                    return (
                      <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </React.Fragment>
        );
      })}
    </Accordion>
  );
}
