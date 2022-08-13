import { AuthorDTO } from '../../dtos';
import { Author } from '../../../infra/database/entities/author';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IFindAuthorUseCase {
  exec(): Promise<Author[]>;
}

export interface ICreateAuthorUseCase {
  exec(author: AuthorDTO): Promise<Author>;
}

export interface IDeleteAuthorUseCase {
  exec(id: string): Promise<DeleteResult>;
}

export interface IUpdateAuthorUSeCase {
  exec(id: string, body: AuthorDTO): Promise<UpdateResult>;
}
