import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "source/features/**/*.graphql",
  generates: {
    "source/graphql/generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: { contextType: "./context#GraphQLContext" },
    },
  },
};

export default config;
