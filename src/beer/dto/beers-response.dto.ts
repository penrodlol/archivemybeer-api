import { Field, ObjectType } from "@nestjs/graphql";
import { BeersCollectionDTO } from "./beers-collection.dto";

@ObjectType()
export class BeersResponseDTO {
  @Field(() => [BeersCollectionDTO]) readonly collection: BeersCollectionDTO[];
  @Field() readonly finished: boolean;
}
