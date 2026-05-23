import { UserRepository } from "@repos/users.repo";

export class UserProvider {
  constructor(private readonly repo: UserRepository) {};

  public async getAllUsers() {
    return await this.repo.getAllUsers();
  };
};
