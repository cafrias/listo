// Environment variables from `.env` files
require("dotenv").config();

import Neo4j from "neo4j-driver";

import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "Something",
    author: "Carlos",
  },
  {
    title: "another",
    author: "Charles",
  },
];

const resolvers = {
  Query: {
    books() {
      return books;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  const driver = Neo4j.driver(
    process.env.DB_URI,
    Neo4j.auth.basic(process.env.DB_USER, process.env.DB_PASS),
  );
  const session = driver.session();

  session
    .run("MATCH (tom {name: $name}) RETURN tom", { name: "Tom Hanks" })
    .then(result => {
      session.close();
      driver.close();
      console.log(result.records[0].get(0));
    })
    .catch(err => {
      console.error(err);
    });

  console.log(`Server ready at ${url}`);
});
