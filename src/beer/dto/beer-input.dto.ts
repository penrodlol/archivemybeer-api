import { InputType, PartialType, PickType } from "@nestjs/graphql";
import { Beer } from "../schema/beer.schema";

@InputType()
export class BeerInputDTO extends PartialType(
  PickType(Beer, ['_id'] as const), InputType
) { }
