import { env } from "@env";
import { Elysia } from "elysia";
import { Users } from "./users";
import { drizz } from "./drizzle";

export const app = new Elysia({ prefix: "/api" })
  .get("/sample", async ({ status }) => {
    const users = await drizz.select().from(Users);
    return status(200, users);
  })
  .listen(env.APP_PORT);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);
