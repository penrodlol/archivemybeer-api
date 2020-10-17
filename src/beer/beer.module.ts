import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { S3Service } from '../aws/s3.service';
import { Beer } from './beer.model';
import { BeerResolver } from './beer.resolver';
import { BeerService } from './beer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Beer]),
  ],
  providers: [
    BeerService,
    BeerResolver,
    S3Service,
  ],
})
export class BeerModule { }