import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { BookDTO } from 'src/domain/dtos';
import { IUpdateBookUseCase } from 'src/domain/interfaces/book/useCases';
import { BookRepository } from 'src/infra/database/repostitories';

@Injectable()
export class UpdateBookUseCase implements IUpdateBookUseCase {
  constructor(private readonly repository: BookRepository) {}

  public exec(id: string, body: BookDTO): Promise<UpdateResult> {
    return this.repository.update(id, body);
  }
}
