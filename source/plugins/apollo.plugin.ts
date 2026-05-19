import apollo from "@elysia/apollo";
import { UserGraphQL } from "@graphql/users.graphql";

export const ApolloPlugin = apollo({
  typeDefs: [UserGraphQL],
});