import { Injectable } from '@nestjs/common';
import { IFindBookuseCase } from 'src/domain/interfaces/book/useCases';
import { Book } from 'src/infra/database/entities';
import { BookRepository } from 'src/infra/database/repostitories';

@Injectable()
export class FindBookUseCase implements IFindBookuseCase {
  constructor(private readonly repository: BookRepository) {}

  public exec(): Promise<Book[]> {
    return this.repository.findAll();
  }
}
