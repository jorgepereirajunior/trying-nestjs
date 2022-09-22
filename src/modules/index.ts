import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { AppModule, appPrefix } from './app';
import { InfraModule } from 'src/infra';

@Module({
  imports: [InfraModule, AppModule, RouterModule.register([appPrefix])],
})
export class Modules {}
