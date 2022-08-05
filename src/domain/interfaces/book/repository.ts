import { BookDTO } from "src/domain/dtos";
import { Book } from "src/infra/database/entities";
import { DeleteResult, UpdateResult } from "typeorm";


export interface IBookRepository {
  findAll(): Promise<Book[]>
  insert(body: BookDTO): Promise<Book>
  update(id: string, body: BookDTO): Promise<UpdateResult>
  delete(id: string): Promise<DeleteResult>;
}