import { env } from "@env";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });
