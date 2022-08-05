import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './modules/authors';
import { BookModule } from './modules/books';

@Module({
  imports: [AuthorsModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
