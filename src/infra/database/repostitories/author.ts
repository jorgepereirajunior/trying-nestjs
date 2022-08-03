import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { IAuthorRepository } from "src/domain/interfaces/produto/repository";
import { Author } from '../entities/author';

@Injectable()
export class AuthorRepositor implements IAuthorRepository {
  constructor(@InjectRepository(Author) private readonly author: Repository<Author>) {}
  
  findAll(): Promise<Author[]> {
    return this.author.find()
  }
}