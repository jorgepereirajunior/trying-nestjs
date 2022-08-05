import { Injectable } from '@nestjs/common';

import { BookDTO } from 'src/domain/dtos';
import { Book } from 'src/infra/database/entities';
import { ICreateBookUseCase } from 'src/domain/interfaces/book/useCases';
import { BookRepository } from 'src/infra/database/repostitories';

@Injectable()
export class CreateBookUseCase implements ICreateBookUseCase {
  constructor(private readonly repository: BookRepository) {}

  public exec(book: BookDTO): Promise<Book> {
    return this.repository.insert(book);
  }
}
