import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './schemas/booking.chema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private userModel: Model<Booking>,

    private readonly mailerService: MailerService,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    console.log('ok');
    const booking = await this.userModel.create(createBookingDto);

    //send email
    this.mailerService.sendMail({
      to: createBookingDto.email, // list of receivers
      subject: 'Activate your account at @hoidanit', // Subject line
      template: 'register',
      context: {
        name: createBookingDto?.name ?? createBookingDto.email,
        activationCode: 'Hello',
      },
    });
    //trả ra phản hồi

    return {
      _id: booking._id,
    };
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  async update(updateBookingDto: UpdateBookingDto) {
    return await this.userModel.updateOne(
      { _id: updateBookingDto._id },
      { ...updateBookingDto },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
