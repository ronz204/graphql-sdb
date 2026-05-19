import { env } from "@env";
import { Elysia } from "elysia";

import { HealthPlugin } from "@plugins/health.plugin";
import { OriginsPlugin } from "@plugins/origins.plugin";

export const app = new Elysia({ prefix: "/api" })
  .use(HealthPlugin)
  .use(OriginsPlugin)
  .listen(env.APP_PORT);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);
