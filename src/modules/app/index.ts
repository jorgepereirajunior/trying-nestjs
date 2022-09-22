import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';

import { authorPrefix, AuthorsModule } from './authors';
import { BookModule, bookPrefix } from './books';

@Module({
  imports: [AuthorsModule, BookModule],
})
export class AppModule {}

export const appPrefix: RouteTree = {
  path: '/app',
  module: AppModule,
  children: [authorPrefix, bookPrefix],
};
