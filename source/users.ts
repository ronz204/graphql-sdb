import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const Users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
});
