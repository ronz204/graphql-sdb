import { prisma } from "@database/prisma.conn";
import { Container } from "@container/container.core";

import { UserRepository } from "@repos/users.repo";
import { UserTokens } from "@features/users-slice/users.tokens";
import { UserProvider } from "@features/users-slice/users.provider";

export const Di: Container = new Container()
  // ==== Bindings for Repositories
  .bind(UserTokens.Repository, () => new UserRepository(prisma))

  // ==== Bindings for Providers
  .bind(UserTokens.Provider, () => new UserProvider(Di.resolve(UserTokens.Repository)));
