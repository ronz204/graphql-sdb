import { prisma } from "@database/prisma.conn";
import { Container } from "@container/container.core";

import { UserRepository } from "@repos/users.repo";

import { UserProvider } from "@features/users-slice/users.provider";
import { UserTokens } from "@features/users-slice/users.tokens";

export const container: Container = new Container()
  .bind(UserTokens.Repository, () => new UserRepository(prisma))
  .bind(UserTokens.Provider, () => new UserProvider(container.resolve(UserTokens.Repository)));
