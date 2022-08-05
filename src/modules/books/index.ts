import { Module } from '@nestjs/common';

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
