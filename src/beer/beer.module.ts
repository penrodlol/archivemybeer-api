import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { S3Service } from '../aws/s3.service';
import { BeerResolver } from './beer.resolver';
import { Beer, BeerSchema } from './schema/beer.schema';
import { BeerService } from './beer.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Beer.name, schema: BeerSchema }])],
  providers: [
    BeerService,
    BeerResolver,
    S3Service,
  ],
})
export class BeerModule { }