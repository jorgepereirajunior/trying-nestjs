import { BookDTO } from '../../../domain/dtos';
import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Author } from './author';

@Entity('book')
export class Book implements BookDTO {
  @PrimaryColumn({ type: 'uuid' })
  public id: string;

  @Column({ type: 'varchar' })
  public title: string;

  @Column({ type: 'datetime' })
  public publishedIn: Date;

  @Column({ type: 'uuid' })
  public authorId: string;

  @JoinColumn({ name: 'authorId' })
  @ManyToOne(() => Author, (author) => author.book, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  public author: Author;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
