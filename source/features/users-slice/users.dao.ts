import type { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

export interface IUserDao {
  getAllUsers(): Promise<User[]>;
};

export class UserDao implements IUserDao {
  constructor(private readonly db: PrismaClient) {};

  public async getAllUsers(): Promise<User[]> {
    return await this.db.user.findMany();
  };
};
