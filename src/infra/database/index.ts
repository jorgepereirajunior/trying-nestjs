import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from './config/main-connection';

import * as Repositories from './repostitories';
import * as Entities from './entities';

const repostitories = Object.values(Repositories);
const entities = Object.values(Entities);

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature(entities),
  ],
  exports: repostitories,
  providers: repostitories,
})
export class DatabaseModule {}
