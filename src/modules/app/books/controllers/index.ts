import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { BookDTO } from 'src/domain/dtos';
import { IBookController } from 'src/domain/interfaces/book/controllers';
import { Book } from 'src/infra/database/entities';
import {
  CreateBookUseCase,
  DeleteBookUseCase,
  FindBookUseCase,
  UpdateBookUseCase,
} from '../useCases';

@Controller()
export class BookController implements IBookController {
  constructor(
    private readonly findUseCase: FindBookUseCase,
    private readonly createUseCase: CreateBookUseCase,
    private readonly updateUseCase: UpdateBookUseCase,
    private readonly deleteUseCase: DeleteBookUseCase,
  ) {}

  @Get()
  public getAll(): Promise<Book[]> {
    return this.findUseCase.exec();
  }

  @Post()
  public create(@Body() body: BookDTO): Promise<Book> {
    return this.createUseCase.exec(body);
  }

  @Patch(':id')
  public update(@Param('id') id: string, body: BookDTO): Promise<UpdateResult> {
    return this.updateUseCase.exec(id, body);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.deleteUseCase.exec(id);
  }
}
