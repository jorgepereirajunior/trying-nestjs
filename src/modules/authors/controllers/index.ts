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
import { AuthorDTO } from '../../../domain/dtos';
import { IAuthorController } from '../../../domain/interfaces/produto/controllers';
import { Author } from '../../../infra/database/entities';
import { CreateAuthorUseCase } from '../useCases/create';
import { DeleteAuthorUseCase } from '../useCases/delete';
import { FindAuthorUseCase } from '../useCases/find';
import { UpdateAuthorUseCase } from '../useCases/update';

@Controller('authors')
export class AuthorController implements IAuthorController {
  constructor(
    private readonly findUseCase: FindAuthorUseCase,
    private readonly createUseCase: CreateAuthorUseCase,
    private readonly deleteUseCase: DeleteAuthorUseCase,
    private readonly updateUseCase: UpdateAuthorUseCase,
  ) {}

  @Get()
  public getAll(): Promise<Author[]> {
    return this.findUseCase.exec();
  }

  @Post()
  public create(@Body() body: AuthorDTO): Promise<Author> {
    return this.createUseCase.exec(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.deleteUseCase.exec(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Author): Promise<UpdateResult> {
    return this.updateUseCase.exec(id, body);
  }
}
