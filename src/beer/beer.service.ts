import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Beer } from './beer.model';

@Injectable()
export class BeerService {
  constructor(
    @InjectRepository(Beer) private repo: Repository<Beer>
  ) { }

  async findAll(skip?: number): Promise<Beer[]> {
    return this.repo.find({ take: 20, skip })
  }
}
