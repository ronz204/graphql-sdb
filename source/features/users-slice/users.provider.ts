import type { User } from "@prisma/client";
import { UserRepository } from "@repos/users.repo";
import type { NewUserDto } from "@repos/users.repo";

export class UserProvider {
  constructor(private readonly repo: UserRepository) {};

  public async getAllUsers(): Promise<User[]> {
    return await this.repo.getAllUsers();
  };

  public async saveNewUser(user: NewUserDto): Promise<User> {
    return await this.repo.saveNewUser(user);
  };
};
