import { Wallets } from "./wallet.model";
import type { InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const Movements = sqliteTable("movements", {
  id: int().primaryKey({ autoIncrement: true }),
  amount: real().notNull(),
  hash: text().notNull().unique(),
  sender: text().notNull().references(() => Wallets.address),
  receiver: text().notNull().references(() => Wallets.address),
  timestamp: text().notNull().default("CURRENT_TIMESTAMP"),
  status: text().notNull().default("pending"),
});

export type MovementRaw = InferSelectModel<typeof Movements>;
