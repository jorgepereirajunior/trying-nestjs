import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorDTO } from 'src/domain/dtos';
import { Author } from 'src/infra/database/entities/author';
import { IAuthorController } from '../../../domain/interfaces/produto/controllers';
import { CreateAuthorUseCase } from '../useCases/create';
import { FindAuthorUseCase } from '../useCases/find';

@Controller()
export class AuthorController implements IAuthorController {
  constructor(
    private readonly findUseCase: FindAuthorUseCase,
    private readonly createUseCase: CreateAuthorUseCase,
  ) {}

  @Get()
  public getAll(): Promise<Author[]> {
    return this.findUseCase.exec();
  }

  @Post()
  public create(@Body() body: AuthorDTO): Promise<Author> {
    return this.createUseCase.exec(body);
  }
}
