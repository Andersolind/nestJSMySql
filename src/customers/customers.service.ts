import { Injectable } from '@nestjs/common';
import { CustomersEntity } from './customers.entity/customers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private bookRepository: Repository<CustomersEntity>,
  ) {}

  findAll(): Promise<CustomersEntity[]> {
    return this.bookRepository.find();
  }

  //   findOne(id: string): Promise<CustomersEntity> {
  //     return this.bookRepository.findOne(id);
  //   }

  createBook(book: CustomersEntity): Promise<CustomersEntity> {
    return this.bookRepository.save(book);
  }
}
