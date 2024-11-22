import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty({ message: '1 không được để trống' })
  name: string;
  @IsNotEmpty({ message: '2 không được để trống' })
  description: string;
  @IsNotEmpty({ message: '3 không được để trống' })
  detail: string;
  @IsNotEmpty({ message: '4 không được để trống' })
  price: string;
  @IsOptional()
  address: string;
  @IsOptional()
  image: string;
  @IsOptional()
  images: string[];
  @IsOptional()
  slug: string;
}
