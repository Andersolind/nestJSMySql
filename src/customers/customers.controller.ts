import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CustomersEntity } from './customers.entity/customers.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly libraryService: CustomersService) {}

  @Post()
  async createBook(@Res() response, @Body() book: CustomersEntity) {
    const newBook = await this.libraryService.createBook(book);
    return response.status(HttpStatus.CREATED).json({
      newBook,
    });
  }

  @Get()
  async fetchAll(@Res() response) {
    const books = await this.libraryService.findAll();
    return response.status(HttpStatus.OK).json({
      books,
    });
  }

  //   @Get('/:id')
  //   async findById(@Res() response, @Param('id') id) {
  //     const book = await this.libraryService.findOne(id);
  //     return response.status(HttpStatus.OK).json({
  //       book,
  //     });
  //   }
}
