import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsInt, IsOptional, IsString, Length, Min } from "class-validator";

@InputType()
export class BeersInputDTO {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(0)
  skip: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @Length(1, 200, { message: 'Requested search is too short or long.' })
  search: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'], { message: 'Sort Order direction is invalid.' })
  sortOrder: string;
}
