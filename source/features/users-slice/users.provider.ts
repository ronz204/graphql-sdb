import type { IUserDao } from "./users.dao";

export class UserProvider {
  constructor(private readonly doa: IUserDao) {};

  public async getAllUsers() {
    return await this.doa.getAllUsers();
  };
};
