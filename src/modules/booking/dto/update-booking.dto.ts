import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;
}
