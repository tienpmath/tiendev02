import { Injectable } from '@nestjs/common';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { Posts } from './schemas/posts.chema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import aqp from 'api-query-params';
import { createSlug } from '@/helpers/util';

@Injectable()
export class BlogPostsService {
  constructor(
    @InjectModel(Posts.name)
    private poststModel: Model<Posts>,
  ) {}

  async create(createBlogPostDto: CreateBlogPostDto) {
    const slugName = await createSlug(createBlogPostDto.name);
    createBlogPostDto.slug = slugName;
    console.log(createBlogPostDto);
    const user = await this.poststModel.create(createBlogPostDto);

    return {
      _id: user._id,
    };
  }

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, sort } = aqp(query);
    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;

    const totalItems = (await this.poststModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * pageSize;

    const results = await this.poststModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .select('-password')
      .sort(sort as any);

    return {
      meta: {
        current: current, //trang hiện tại
        pageSize: pageSize, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      results, //kết quả query
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} blogPost`;
  }

  async findBySlug(slug: string) {
    // console.log(slug);
    return await this.poststModel.findOne({ slug });
  }

  update(id: number, updateBlogPostDto: UpdateBlogPostDto) {
    return `This action updates a #${id} blogPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogPost`;
  }
}
