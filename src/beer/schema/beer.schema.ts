import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ObjectID } from 'mongodb';
import { Document } from 'mongoose';

export type BeerDocument = Beer & Document;

@Schema()
@ObjectType()
export class Beer {
  @Field(() => ID, { nullable: false })
  @IsNotEmpty({ message: 'ID cannot be empty'})
  _id: ObjectID;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty'})
  @Length(1, 200, { message: 'Name is either too short or long' })
  name: string;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'Brewer cannot be empty'})
  @Length(1, 200, { message: 'Brewer is either too short or long' })
  brewer: string;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'Style cannot be empty'})
  @Length(1, 200, { message: 'Style is either too short or long' })
  style: string;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'City cannot be empty'})
  @Length(1, 200, { message: 'City is either too short or long' })
  city: string;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'State cannot be empty'})
  @Length(1, 200, { message: 'State is either too short or long' })
  state: string;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'Country cannot be empty'})
  @Length(1, 200, { message: 'Country is either too short or long' })
  country: string;

  @Prop({ required: true, minlength: 1, maxlength: 200, trim: true })
  @IsString()
  @IsNotEmpty({ message: 'Image cannot be empty'})
  image: string;

  @Field({ nullable: false })
  @IsString()
  @IsNotEmpty({ message: 'Image Url cannot be empty'})
  imageUrl: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);