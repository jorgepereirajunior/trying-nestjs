import { AuthorDTO } from '../../dtos';
import { Author } from '../../../infra/database/entities/author';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IAuthorRepository {
  insert(author: AuthorDTO): Promise<Author>;
  delete(id: string): Promise<DeleteResult>;
  update(id: string, body: AuthorDTO): Promise<UpdateResult>;
  findAll(): Promise<Author[]>;
}
