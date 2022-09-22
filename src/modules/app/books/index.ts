import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';

import { InfraModule } from 'src/infra';
import { BookController } from './controllers';

import * as UseCases from './useCases';

const useCases = Object.values(UseCases);

@Module({
  imports: [InfraModule],
  controllers: [BookController],
  providers: useCases,
})
export class BookModule {}

export const bookPrefix: RouteTree = {
  path: '/books',
  module: BookModule,
};
