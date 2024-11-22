import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostsDocument = HydratedDocument<Posts>;

@Schema({ timestamps: true })
export class Posts {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  detail: string;

  @Prop()
  price: number;

  @Prop()
  source: string;

  @Prop()
  image: string;
  @Prop()
  slug: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
