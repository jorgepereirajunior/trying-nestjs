import { Injectable } from '@nestjs/common';
import { AuthorDTO } from '../../../domain/dtos';
import { Author } from '../../../infra/database/entities/author';
import { ICreateAuthorUseCase } from '../../../domain/interfaces/produto/useCases';
import { AuthorRepository } from '../../../infra/database/repostitories/author';

@Injectable()
export class CreateAuthorUseCase implements ICreateAuthorUseCase {
  constructor(private readonly repository: AuthorRepository) {}

  public async exec(author: AuthorDTO): Promise<Author> {
    return await this.repository.insert(author);
  }
}
