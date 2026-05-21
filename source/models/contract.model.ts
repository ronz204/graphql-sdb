import { Wallets } from "./wallets.model";
import type { InferSelectModel } from "drizzle-orm";
import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const Contracts = sqliteTable("contracts", {
  id: int().primaryKey({ autoIncrement: true }),
  type: text().notNull(),
  address: text().notNull().unique(),
  creator: text().notNull().references(() => Wallets.address),
  locked: real().notNull().default(0),
});

export type ContractRaw = InferSelectModel<typeof Contracts>;
