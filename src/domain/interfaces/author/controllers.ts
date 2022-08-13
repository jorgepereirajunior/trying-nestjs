import { AuthorDTO } from '../../dtos';
import { Author } from '../../../infra/database/entities/author';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IAuthorController {
  getAll(): Promise<Author[]>;
  create(body: AuthorDTO): Promise<Author>;
  update(id: string, body: Author): Promise<UpdateResult>;
  remove(id: string): Promise<DeleteResult>;
}
