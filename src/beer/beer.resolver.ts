
import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { S3Service } from "../aws/s3.service";

import { BeerService } from "./beer.service";
import { BeersResponseDTO } from "./dto/beers-response.dto";

@Resolver()
export class BeerResolver {
  constructor(
    private beerService: BeerService,
    private s3Service: S3Service,
  ) { }

  @Query(() => BeersResponseDTO, { name: 'beers' })
  async getBeers(
    @Args('skip', { type: () => Int, defaultValue: 0, nullable: true }) skip: number
  ) {
    const collection = await this.beerService.findAll(skip);
    const finished = collection.length < 20;

    return { collection, finished };
  }

}
