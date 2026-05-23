import UserSchema from "@features/users-slice/users.graphql" with { type: "text" };

export const SchemasGql = [UserSchema].join("\n");
