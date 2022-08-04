import { Module } from '@nestjs/common';
import * as UseCases from './useCases/';
import { AuthorController } from './controllers';
import { InfraModule } from 'src/infra';

const useCases = Object.values(UseCases);
@Module({
  imports: [InfraModule],
  controllers: [AuthorController],
  providers: useCases,
})
export class AuthorsModule {}
