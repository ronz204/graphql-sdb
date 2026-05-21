import { Users } from "./user.model";
import type { InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const Wallets = sqliteTable("wallets", {
  id: int().primaryKey({ autoIncrement: true }),
  address: text().notNull().unique(),
  balance: real().notNull().default(0.0),
  userId: int().notNull().references(() => Users.id, { onDelete: "cascade" }),
});

export type WalletRaw = InferSelectModel<typeof Wallets>;
