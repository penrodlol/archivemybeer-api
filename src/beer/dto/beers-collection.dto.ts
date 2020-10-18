import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ObjectID } from 'mongodb';

@ObjectType()
export class BeersCollectionDTO {
  @Field(() => ID, { nullable: false }) readonly _id: ObjectID;
  @Field({ nullable: false }) readonly name: string;
  @Field({ nullable: false }) readonly brewer: string;
  @Field({ nullable: false }) readonly style: string;
  @Field({ nullable: false }) readonly city: string;
  @Field({ nullable: false }) readonly state: string;
  @Field({ nullable: false }) readonly country: string;
  @Field({ nullable: false }) readonly imageUrl: string;
}
