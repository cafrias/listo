import type { NextPage } from "next";
import { useMemo } from "react";
import { ListGroup, Container, Row, Col, Accordion } from "react-bootstrap";
import { GroceryListComponent } from "../components/GroceryList/GroceryListComponent";
import { mockList } from "../data/mockList";
import { groceryListGroupByCategory } from "../models/GroceryList";

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <GroceryListComponent list={mockList} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
