import { Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { CategoriesRepository } from './repositories/categories.repositories copy';
import { UsersRepository } from './repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoriesRepository],
  exports: [UsersRepository, CategoriesRepository],
})
export class DatabaseModule {}
