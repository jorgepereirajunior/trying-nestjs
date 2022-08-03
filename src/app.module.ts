import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './modules/authors/authors.module';

@Module({
  imports: [AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
