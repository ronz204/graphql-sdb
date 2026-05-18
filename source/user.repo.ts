import { Users } from "./users";
import { eq } from "drizzle-orm";
import type { UserDto } from "./user.model";
import { LibSQLDatabase } from "drizzle-orm/libsql";

export class UserRepository {
  constructor(private db: LibSQLDatabase) {};

  public async getAllUsers(): Promise<UserDto[]> {
    const users = await this.db.select().from(Users);
    return users.map((user) => ({
      id: String(user.id),
      name: user.name,
      email: user.email,
    }));
  };

  public async getUserById(id: string): Promise<UserDto | null> {
    const user = await this.db.select().from(Users)
      .where(eq(Users.id, Number(id)))
      .limit(1).get();

    if (!user) return null;
    return {
      id: String(user.id),
      name: user.name,
      email: user.email,
    };
  };
};
