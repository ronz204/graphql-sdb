import { Users } from "@models/user.model";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import type { IUserRepository, UserDto } from "./users.irepo";

export class UserRepository implements IUserRepository {
  constructor(private db: LibSQLDatabase) {};

  public async getAllUsers(): Promise<UserDto[]> {
    const users = await this.db.select().from(Users);
    return users.map((user) => ({
      id: String(user.id),
      name: user.name,
      email: user.email,
    }));
  };
};
