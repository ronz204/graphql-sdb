import type { CodegenConfig  } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "source/features/**/*.graphql",
  generates: {
    "generated/graphql/schema.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../../source/graphql/context#GraphQLContext",
      },
    },
  },
};

export default config;
