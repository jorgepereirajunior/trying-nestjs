import { BookDTO } from 'src/domain/dtos';
import { Book } from 'src/infra/database/entities';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IFindBookuseCase {
  exec(): Promise<Book[]>;
}

export interface ICreateBookUseCase {
  exec(book: BookDTO): Promise<Book>;
}

export interface IUpdateBookUseCase {
  exec(id: string, body: BookDTO): Promise<UpdateResult>;
}

export interface IDeleteBookUseCase {
  exec(id: string): Promise<DeleteResult>;
}
