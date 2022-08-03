import { BookDTO } from './book';

export type AuthorDTO = {
  id: string;
  name: string;
  book: BookDTO[];
};
