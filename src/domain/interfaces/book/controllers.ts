import { BookDTO } from 'src/domain/dtos';
import { Book } from 'src/infra/database/entities';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IBookController {
  getAll(): Promise<Book[]>;
  create(body: BookDTO): Promise<Book>;
  update(id: string, body: BookDTO): Promise<UpdateResult>;
  remove(id: string): Promise<DeleteResult>;
}
