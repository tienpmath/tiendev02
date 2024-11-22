import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateBlogPostDto {
  @IsNotEmpty({ message: 'name không được để trống' })
  name: string;
  @IsNotEmpty({ message: 'description không được để trống' })
  description: string;
  @IsOptional()
  detail: string;
  @IsOptional()
  price: string;
  @IsOptional()
  source: string;
  @IsOptional()
  image: string;
  @IsOptional()
  slug: string;
}
