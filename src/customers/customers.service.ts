import { Injectable } from '@nestjs/common';
import { CustomersEntity } from './customers.entity/customers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDTO } from './customers.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private customerRepo: Repository<CustomersEntity>,
  ) { }

  findAll(): Promise<CustomersEntity[]> {
    return this.customerRepo.find();
  }

  //   findOne(id: string): Promise<CustomersEntity> {
  //     return this.bookRepository.findOne(id);
  //   }

  async createInvoice(customer: CustomersEntity): Promise<CustomerDTO> {
    let newCustomer: CustomersEntity = this.customerRepo.create(customer);

 
    
    let data = await this.customerRepo.save(customer);
    return data;
  }
}
