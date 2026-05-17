import { env } from "@env";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({ url: env.DB_FILE_NAME });
export const drizz = drizzle({ client });
