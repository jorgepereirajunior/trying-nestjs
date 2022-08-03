import { AuthorDTO } from '../../dtos'
import { Author } from '../../../infra/database/entities/author'

export interface IAuthorRepository {
  findAll(): Promise<Author[]>
}