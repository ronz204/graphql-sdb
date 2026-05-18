import type { UserDto } from "./user.model";
import { UserRepository } from "./user.repo";

export type GetUserByIdArgs = {
  id: string;
};

export class UserResolver {
  constructor(private repo: UserRepository) {};

  public async getAllUsers(): Promise<UserDto[]> {
    return this.repo.getAllUsers();
  };

  public async getUserById(args: GetUserByIdArgs): Promise<UserDto | null> {
    return this.repo.getUserById(args.id);
  };
};
