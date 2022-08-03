import { AuthorDTO } from 'src/domain/dtos';
import { Book } from './book';

export class Author implements AuthorDTO {
  public readonly id: string;
  public name: string;
  public book: Book[];
}
