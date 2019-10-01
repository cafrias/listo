import { gql } from "apollo-server";

const CategorySchema = gql`
  type Category {
    id: String!;
    name: String!;
  }

  input CategoryCreateInput {
    id: String!;
    name: String!;
  }

  input CategoryUpdateInput {
    id: String!;
    name: String;
  }
`;

export default CategorySchema;
