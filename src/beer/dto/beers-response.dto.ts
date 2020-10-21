import { Field, ObjectType } from "@nestjs/graphql";
import { Beer } from "../schema/beer.schema";

@ObjectType()
export class BeersResponseDTO {
  @Field(() => [Beer]) readonly collection: Beer[];
  @Field() readonly finished: boolean;
}
