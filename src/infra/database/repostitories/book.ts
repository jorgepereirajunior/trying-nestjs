import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDTO } from 'src/domain/dtos';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IBookRepository } from '../../../domain/interfaces/book/repository';
import { Book } from '../entities';

@Injectable()
export class BookRepository implements IBookRepository {
  constructor(
    @InjectRepository(Book) private readonly book: Repository<Book>,
  ) {}

  public findAll(): Promise<Book[]> {
    return this.book.find();
  }

  public insert(body: BookDTO): Promise<Book> {
    return this.book.save(this.book.create(body));
  }

  public update(id: string, body: BookDTO): Promise<UpdateResult> {
    return this.book.update({ id }, body);
  }

  public delete(id: string): Promise<DeleteResult> {
    return this.book.delete({ id });
  }
}
