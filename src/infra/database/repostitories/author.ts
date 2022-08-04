import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IAuthorRepository } from '../../../domain/interfaces/produto/repository';
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
    return this.author.find();
  }
}
