import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Beer, BeerDocument } from './schema/beer.schema';

@Injectable()
export class BeerService {
  constructor(@InjectModel(Beer.name) private model: Model<BeerDocument>) { }

  async findAll(skip: number): Promise<Beer[]> {
    return await this.model
      .find()
      .limit(20)
      .skip(skip)
      .exec();
  }
}
