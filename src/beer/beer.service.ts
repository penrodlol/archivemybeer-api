import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BeersInputDTO } from './dto/beers-input.dto';
import { Beer, BeerDocument } from './schema/beer.schema';

@Injectable()
export class BeerService {
  constructor(@InjectModel(Beer.name) private model: Model<BeerDocument>) { }

  async findAll(dto: BeersInputDTO): Promise<Beer[]> {
    return this.model
      .find()
      .skip(dto.skip)
      .where(dto.search ? { $text: { $search: dto.search } } : {})
      .limit(20)
      .exec();
  }
}
