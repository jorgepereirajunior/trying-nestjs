import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { IDeleteBookUseCase } from 'src/domain/interfaces/book/useCases';
import { BookRepository } from 'src/infra/database/repostitories';

@Injectable()
export class DeleteBookUseCase implements IDeleteBookUseCase {
  constructor(private readonly repository: BookRepository) {}

  public exec(id: string): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
