import { UserDao } from "./users.dao";

export class UserProvider {
  constructor(private readonly dao: UserDao) {};

  public async getAllUsers() {
    return await this.dao.getAllUsers();
  };
};
