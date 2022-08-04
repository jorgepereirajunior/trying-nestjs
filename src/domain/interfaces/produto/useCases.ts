import { AuthorDTO } from '../../dtos';
import { Author } from '../../../infra/database/entities/author';

export interface IFindAuthorUseCase {
  exec(): Promise<Author[]>;
}

export interface ICreateAuthorUseCase {
  exec(author: AuthorDTO): Promise<Author>;
}
