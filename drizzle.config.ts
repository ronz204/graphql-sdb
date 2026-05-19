import { env } from "@env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "sqlite",
  schema: "./source/models/*.model.ts",
  dbCredentials: { url: env.DB_FILE_NAME },
});
