import { gql } from "apollo-server";
import CategorySchema from "./Category";
import MutationSchema from "./Mutation";
import QuerySchema from "./Query";

const Schema = gql`
  ${CategorySchema}

  ${MutationSchema}
  ${QuerySchema}
`;

export default Schema;
