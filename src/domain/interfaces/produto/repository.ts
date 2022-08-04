import { AuthorDTO } from '../../dtos';
import { Author } from '../../../infra/database/entities/author';

export interface IAuthorRepository {
  insert(author: AuthorDTO): Promise<Author>;
  findAll(): Promise<Author[]>;
}
