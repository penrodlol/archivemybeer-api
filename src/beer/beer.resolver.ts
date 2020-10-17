
import { Args, Field, Int, ObjectType, Query, Resolver } from "@nestjs/graphql";
import { S3Service } from "src/aws/s3.service";

import { Beer } from "./beer.model";
import { BeerService } from "./beer.service";

@ObjectType()
export class BeersResponse {
  @Field(() => [Beer]) collection: Beer[];
  @Field() finished: boolean;
}

@Resolver()
export class BeerResolver {
  constructor(
    private beerService: BeerService,
    private s3Service: S3Service,
  ) { }

  @Query(() => BeersResponse, { name: 'beers' })
  async getBeers(@Args('skip', { type: () => Int, nullable: true }) skip: number) {
    const collection = await this.beerService
      .findAll(skip)
      .then(res => res.map(beer => ({ ...beer, imageUrl: this.s3Service.url(beer.image) })))
      .catch(error => null); /// TBD

    const finished = collection && collection.length < 20;

    return { collection, finished };
  }
}
