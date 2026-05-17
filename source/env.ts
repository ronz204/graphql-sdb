import { z } from "zod";

const envSchema = z.object({
  // ==========================================
  // Application Config
  // ==========================================
  APP_VERSION: z.string().default("1.0.0"),
  APP_NAME: z.string().default("GraphQL API"),
  APP_PORT: z.string().transform((val) => parseInt(val, 10)).default(3000),

  // ==========================================
  // SQLite Config
  // ==========================================
  DB_FILE_NAME: z.string(),

  // ==========================================
  // Security Config
  // ==========================================
  ACCESS_TTL: z.string().default("15m"),
  REFRESH_TTL: z.number().default(7 * 24 * 60 * 60),
  CORS_ORIGIN: z.string().transform((val) => val.split(",").map((origin) => origin.trim())),
});

export const env = envSchema.parse(process.env);
