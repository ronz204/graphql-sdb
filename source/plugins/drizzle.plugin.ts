import { env } from "@env";
import { Elysia } from "elysia";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import { UserRepository } from "@repos/users.repo";

export const DrizzlePlugin = new Elysia({ name: "drizzle.plugin" })
  .decorate(() => {
    const client = createClient({ url: env.DB_FILE_NAME });
    const drizz = drizzle({ client });

    return {
      userRepo: new UserRepository(drizz),
    };
  });
