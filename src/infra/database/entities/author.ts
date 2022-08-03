import { AuthorDTO } from 'src/domain/dtos';
import { v4 as uuid } from 'uuid'
import {
  Entity,
  Column,
  PrimaryColumn,
   OneToMany
} from 'typeorm'

import { Book } from './book';

@Entity('author')
export class Author implements AuthorDTO {
  
  @PrimaryColumn({ type: 'uuid'})
  public readonly id: string;

  @Column({ type: 'varchar'})
  public name: string;

  @OneToMany(() => Book, book => book.author)
  book: Book[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
