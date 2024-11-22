import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Date } from 'mongoose';

export class CreateBookingDto {
  @IsNotEmpty({ message: 'name không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'email không được để trống' })
  @IsEmail({}, { message: 'email không đúng định dạng' })
  email: string;

  @IsNotEmpty({ message: 'phone không được để trống' })
  phone: string;
  @IsOptional()
  address: Date;

  @IsOptional()
  ngaydi: string;

  @IsOptional()
  nhaxe: string;
  @IsOptional()
  diemdon: string;
  @IsOptional()
  diemtra: string;
  @IsOptional()
  nguoilon: number;
  @IsOptional()
  treem: number;
  @IsOptional()
  @IsOptional()
  datcoc: number;

  @IsOptional()
  nhaxenhan: number;

  @IsOptional()
  chuyenkhoan: number;

  @IsOptional()
  status: number;
  @IsOptional()
  confirm: number;
  @IsOptional()
  nhanvien: string;
}
