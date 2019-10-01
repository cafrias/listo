import { gql } from "apollo-server";

const QuerySchema = gql`
  type Query {
    # Category
    getCategories: [Category!]!
    category(id: String!): Category!
  }
`;

export default QuerySchema;
