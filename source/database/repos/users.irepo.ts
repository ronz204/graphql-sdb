import type { UserRaw } from "@models/user.model";

export type UserDto = {
  id: string;
  name: UserRaw["name"];
  email: UserRaw["email"];
};

export interface IUserRepository {
  getAllUsers(): Promise<UserDto[]>;
};
