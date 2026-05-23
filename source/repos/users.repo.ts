import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export type NewUserDto = {
  name: User["name"];
  email: User["email"];
};

export class UserRepository {
  constructor(private readonly db: PrismaClient) {};

  public async getAllUsers(): Promise<User[]> {
    return await this.db.user.findMany();
  };

  public async saveNewUser(user: NewUserDto): Promise<User> {
    const random = Math.floor(1000 + Math.random() * 9000);
    const code = `${user.name.substring(0, 3).toUpperCase()}-${random}`;
    return await this.db.user.create({ data: { ...user, code } });
  };
};
