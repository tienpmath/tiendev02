import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  detail: string;

  @Prop()
  price: number;

  @Prop()
  address: string;

  @Prop()
  image: string;

  @Prop()
  images: string[];
  @Prop()
  slug: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
