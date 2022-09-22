import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../../../infra/database/repostitories';
import { DeleteResult } from 'typeorm';
import { IDeleteAuthorUseCase } from '../../../domain/interfaces/author/useCases';

@Injectable()
export class DeleteAuthorUseCase implements IDeleteAuthorUseCase {
  constructor(private readonly repository: AuthorRepository) {}

  public async exec(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
