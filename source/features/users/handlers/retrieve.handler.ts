import type { UserDto } from "@repos/users.irepo";
import type { IUserRepository } from "@repos/users.irepo";

export class RetrieveUsersHandler {
  constructor(private readonly repo: IUserRepository) {};

  public async handle(): Promise<UserDto[]> {
    return await this.repo.getAllUsers();
  };
};
