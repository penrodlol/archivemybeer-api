import { Optional } from '@nestjs/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsMongoId, Length } from 'class-validator';
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

@Schema({ timestamps: { updatedAt: 'updated', createdAt: false } })
@ObjectType()
export class Beer {
  @Field(() => ID, fields)
  @Optional()
  @IsMongoId()
  _id: ObjectID;
  
  @Prop(props)
  @Field(fields)
  @Length(1, 200)
  name: string;

  @Prop(props)
  @Field(fields)
  @Length(1, 200)
  brewer: string;

  @Prop(props)
  @Field(fields)
  @Length(1, 200)
  style: string;

  @Prop(props)
  @Field(fields)
  @Length(1, 200)
  city: string;

  @Prop(props)
  @Field(fields)
  @Length(1, 200)
  state: string;

  @Prop(props)
  @Field(fields)
  @Length(1, 200)
  country: string;

  @Prop(props)
  @Field(fields)
  image: string;

  @Field(fields)
  updated: Date;

  @Field(fields)
  imageUrl: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);
