import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema({ timestamps: true })
export class Booking {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  ngaydi: string;

  @Prop()
  nhaxe: string;
  @Prop()
  diemdon: string;
  @Prop()
  diemtra: string;
  @Prop()
  nguoilon: number;
  @Prop()
  treem: number;
  @Prop()
  tongtien: number;
  @Prop()
  datcoc: number;

  @Prop()
  nhaxenhan: number;

  @Prop()
  chuyenkhoan: number;

  @Prop()
  status: number;
  @Prop()
  confirm: number;
  @Prop()
  nhanvien: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
