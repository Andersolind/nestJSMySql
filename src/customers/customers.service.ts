import { Injectable } from '@nestjs/common';
import { CustomersEntity } from './customers.entity/customers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private customerRespository: Repository<CustomersEntity>,
  ) {}

  findAll(): Promise<CustomersEntity[]> {
    return this.customerRespository.find();
  }

  createInvoice(book: CustomersEntity): Promise<CustomersEntity> {
    return this.customerRespository.save(book);
  }
}
