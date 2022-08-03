import { Module } from '@nestjs/common';
import { AuthorService } from './useCases/authors.service';
import { AuthorController } from './controllers';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorsModule {}
