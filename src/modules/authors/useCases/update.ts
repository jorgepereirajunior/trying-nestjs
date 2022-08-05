import { Injectable } from '@nestjs/common';
import { AuthorDTO } from 'src/domain/dtos';
import { IUpdateAuthorUSeCase } from 'src/domain/interfaces/produto/useCases';
import { AuthorRepository } from 'src/infra/database/repostitories';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UpdateAuthorUseCase implements IUpdateAuthorUSeCase {
  constructor(private readonly repository: AuthorRepository) {}

  public exec(id: string, body: AuthorDTO): Promise<UpdateResult> {
    return this.repository.update(id, body);
  }
}
