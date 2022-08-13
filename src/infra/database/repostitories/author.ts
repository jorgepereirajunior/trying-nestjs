import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IAuthorRepository } from '../../../domain/interfaces/author/repository';
import { Author } from '../entities/author';
import { AuthorDTO } from 'src/domain/dtos';

@Injectable()
export class AuthorRepository implements IAuthorRepository {
  constructor(
    @InjectRepository(Author) private readonly author: Repository<Author>,
  ) {}

  public insert(author: AuthorDTO): Promise<Author> {
    return this.author.save(this.author.create(author));
  }

  public findAll(): Promise<Author[]> {
    return this.author.find({
      relations: {
        book: true,
      },
    });
  }

  public delete(id: string): Promise<DeleteResult> {
    return this.author.delete({ id });
  }

  update(id: string, body: AuthorDTO): Promise<UpdateResult> {
    return this.author.update({ id }, body);
  }
}
