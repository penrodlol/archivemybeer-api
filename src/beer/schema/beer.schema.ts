import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsMongoId, IsNotEmpty, IsString, Length } from 'class-validator';
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
  @IsNotEmpty({ message: 'Identifier cannot be empty.' })
  @IsMongoId()
  _id: ObjectID;
  
  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'Name cannot be empty.' })
  @IsString()
  @Length(1, 200, { message: 'Name is too short or long.' })
  name: string;

  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'Brewer cannot be empty.' })
  @IsString()
  @Length(1, 200, { message: 'Brewer is too short or long.' })
  brewer: string;

  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'Style cannot be empty.' })
  @IsString()
  @Length(1, 200, { message: 'Style is too short or long.' })
  style: string;

  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'City cannot be empty.' })
  @IsString()
  @Length(1, 200, { message: 'City is too short or long.' })
  city: string;

  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'State cannot be empty.' })
  @IsString()
  @Length(1, 200, { message: 'State is too short or long.' })
  state: string;

  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'Country cannot be empty.' })
  @IsString()
  @Length(1, 200, { message: 'Country is too short or long.' })
  country: string;

  @Prop(props)
  @Field(fields)
  @IsNotEmpty({ message: 'Image cannot be empty.' })
  @IsString()
  image: string;

  @Field(fields)
  @IsNotEmpty({ message: 'Updated cannot be empty.' })
  @IsDate()
  updated: Date;

  @Field(fields)
  @IsNotEmpty({ message: 'Image URL cannot be empty.' })
  @IsString()
  imageUrl: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);
