import { Injectable } from '@nestjs/common';
import { IFindAuthorUseCase } from '../../../domain/interfaces/author/useCases';
import { Author } from '../../../infra/database/entities/author';
import { AuthorRepository } from '../../../infra/database/repostitories/author';

@Injectable()
export class FindAuthorUseCase implements IFindAuthorUseCase {
  constructor(private readonly repository: AuthorRepository) {}

  public async exec(): Promise<Author[]> {
    const authors = await this.repository.findAll();

    return authors;
  }
}
