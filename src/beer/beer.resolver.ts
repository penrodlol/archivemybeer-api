import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { S3Service } from "../aws/s3.service";

import { BeerService } from "./beer.service";
import { BeerInputDTO } from "./dto/beer-input.dto";
import { BeerUpdateDTO } from "./dto/beer-update.dto";
import { BeersInputDTO } from "./dto/beers-input.dto";
import { BeersResponseDTO } from "./dto/beers-response.dto";
import { Beer } from "./schema/beer.schema";

@Resolver()
export class BeerResolver {
  constructor(
    private beerService: BeerService,
    private s3Service: S3Service,
  ) { }

  @Query(() => BeersResponseDTO, { name: 'beers' })
  async getBeers(
    @Args('input', {
      type: () => BeersInputDTO,
      nullable: true,
    }) dto: BeersInputDTO
  ) {
    const collection = await this.beerService
      .findAll(dto)
      .then(beers => beers.map(beer => {
        beer.imageUrl = this.s3Service.url(beer.image);
        return beer;
      }))
      .catch(); // TBD

    const finished = collection.length < 20;

    return { collection, finished };
  }

  @Query(() => Beer, { name: 'beer' })
  async getBeer(
    @Args('input', {
      type: () => BeerInputDTO,
    }) dto: BeerInputDTO
  ) {
    const beer = await this.beerService.findOne(dto);
    beer.imageUrl = this.s3Service.url(beer.image);

    return beer;
  }

  @Mutation(() => Beer)
  async updateBeer(
    @Args('update', {
      type: () => BeerUpdateDTO
    }) dto: BeerUpdateDTO
  ) {
    return this.beerService.updateOne(dto);
  }

}
