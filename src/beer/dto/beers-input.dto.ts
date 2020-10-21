import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsInt, IsString, Length, Min } from "class-validator";

@InputType()
export class BeersInputDTO {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0)
  skip: number;

  @Field({ nullable: true })
  @IsString()
  @Length(1, 200, { message: 'Requested search is too short or long.' })
  search: string;

  @Field({ nullable: true })
  @IsString()
  @IsIn(['asc', 'desc'], { message: 'Sort Order direction is invalid.' })
  sortOrder: string;
}
