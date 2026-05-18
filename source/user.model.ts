import { Users } from "./users";
import type { InferSelectModel } from "drizzle-orm";

type UserRow = InferSelectModel<typeof Users>;

export type UserDto = {
  id: string;
  name: UserRow["name"];
  email: UserRow["email"];
};
