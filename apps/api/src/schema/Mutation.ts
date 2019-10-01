import { gql } from "apollo-server";

const MutationSchema = gql`
  type Mutation {
    # Category
    createCategory(category: CategoryCreateInput!): Category!
    updateCategory(category: CategoryUpdateInput!): Category!
    deleteCategory(id: String!): Category!
  }
`;

export default MutationSchema;
