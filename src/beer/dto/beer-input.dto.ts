import { InputType, OmitType, PartialType } from "@nestjs/graphql";
import { Beer } from "../schema/beer.schema";

@InputType()
export class BeerInputDTO extends PartialType(
  OmitType(Beer, ['imageUrl', 'updated'] as const), InputType
) { }
