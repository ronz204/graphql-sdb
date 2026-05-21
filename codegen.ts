import type { CodegenConfig  } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "source/graphql/*.graphql",
  generates: {
    "generated/graphql/schema.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
