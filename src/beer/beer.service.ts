import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Model } from 'mongoose';
import { trimEntity } from '../utils';
import { BeerInputDTO } from './dto/beer-input.dto';
import { BeerUpdateDTO } from './dto/beer-update.dto';
import { BeersInputDTO } from './dto/beers-input.dto';
import { Beer, BeerDocument } from './schema/beer.schema';

@Injectable()
export class BeerService {
  constructor(@InjectModel(Beer.name) private model: Model<BeerDocument>) { }

  async findAll(dto?: BeersInputDTO): Promise<Beer[]> {
    return this.model
      .find()
      .sort({ updated: dto?.sortOrder ? dto.sortOrder : 'desc' })
      .skip(dto?.skip ? dto.skip : 0)
      .where(dto?.search ? { $text: { $search: dto.search } } : {})
      .limit(20)
      .exec();
  }

  async findOne(dto: BeerInputDTO): Promise<Beer> {
    return this.model
      .findById(dto._id)
      .exec();
  }

  async updateOne(dto: BeerUpdateDTO): Promise<Beer> {
    const conditions = { _id: new ObjectID(dto._id) };
    const update = trimEntity(dto, ['_id']);
    const options = { useFindAndModify: false, new: true }

    return this.model
      .findOneAndUpdate(
        conditions,
        update,
        options,
      )
      .exec();
  }
}
