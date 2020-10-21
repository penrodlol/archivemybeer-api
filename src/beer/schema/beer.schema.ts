import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';

const props = {
  required: true,
  minlength: 1,
  maxlength: 200,
  trim: true,
};

const fields = {
  nullable: false,
};

export type BeerDocument = Beer & Document;

@Schema()
@ObjectType()
export class Beer {
  @Field(() => ID, fields) _id: ObjectID;
  @Prop(props) @Field(fields) name: string;
  @Prop(props) @Field(fields) brewer: string;
  @Prop(props) @Field(fields) style: string;
  @Prop(props) @Field(fields) city: string;
  @Prop(props) @Field(fields) state: string;
  @Prop(props) @Field(fields) country: string;
  @Prop(props) @Field(fields) image: string;
  @Field(fields) imageUrl: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);
