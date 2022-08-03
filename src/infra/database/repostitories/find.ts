import { Injectable } from '@nestjs/common'
import { IFindAuthorUseCase } from '../../../domain/interfaces/produto/useCase'
import { Author } from '../entities/author'
import { AuthorRepository } from './author'

export class FindAuthoUseCase implements IFindAuthorUseCase {
  constructor(private readonly repository: AuthorRepository) {}

  public async exec(): Promise<Author[]> {
    const authors = await this.repository.findAll()

    return authors
  }
}