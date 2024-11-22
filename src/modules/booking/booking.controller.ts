import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookingService } from './booking.service';

import { Public } from '@/decorator/customize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @Public()
  create(@Body() createBookingDto: CreateBookingDto) {
    console.log(createBookingDto);
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  @Public()
  findAll() {
    console.log('ok');
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch()
  @Public()
  update(@Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(updateBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
