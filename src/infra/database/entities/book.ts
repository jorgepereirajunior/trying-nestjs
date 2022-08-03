import { BookDTO } from 'src/domain/dtos';

export class Book implements BookDTO {
  public readonly id: string;
  public title: string;
  public publishedIn: Date;
}
