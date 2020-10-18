import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const validation = {
  required: true,
  minlength: 1,
  maxlength: 200,
  trim: true
};

export type BeerDocument = Beer & Document;

@Schema()
export class Beer {
  @Prop(validation) name: string;
  @Prop(validation) brewer: string;
  @Prop(validation) style: string;
  @Prop(validation) city: string;
  @Prop(validation) state: string;
  @Prop(validation) country: string;
  @Prop(validation) image: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);