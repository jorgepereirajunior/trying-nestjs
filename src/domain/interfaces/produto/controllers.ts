import { AuthorDTO } from '../../dtos';
import { Author } from '../../../infra/database/entities/author';

export interface IAuthorController {
  getAll(): Promise<Author[]>;
  create(body: AuthorDTO): Promise<Author>;
}
