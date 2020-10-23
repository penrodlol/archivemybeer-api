import { Args, Query, Resolver } from "@nestjs/graphql";
import { S3Service } from "../aws/s3.service";

import { BeerService } from "./beer.service";
import { BeersInputDTO } from "./dto/beers-input.dto";
import { BeersResponseDTO } from "./dto/beers-response.dto";

@Resolver()
export class BeerResolver {
  constructor(
    private beerService: BeerService,
    private s3Service: S3Service,
  ) { }

  @Query(() => BeersResponseDTO, { name: 'beers' })
  async getBeers(
    @Args('beersInput', {
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

}
