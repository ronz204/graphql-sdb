import { Token } from "@container/container.token";
import type { UserProvider } from "./users.provider";
import type { UserRepository } from "@repos/users.repo";

export const UserTokens = {
  Repository: new Token<UserRepository>("UserRepository"),
  Provider: new Token<UserProvider>("UserProvider"),
} as const;
