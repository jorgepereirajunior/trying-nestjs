import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';

import { InfraModule } from 'src/infra';

import { AuthorController } from './controllers';
import * as UseCases from './useCases';

const useCases = Object.values(UseCases);

@Module({
  imports: [InfraModule],
  controllers: [AuthorController],
  providers: useCases,
})
export class AuthorsModule {}

export const authorPrefix: RouteTree = {
  path: '/authors',
  module: AuthorsModule,
};
