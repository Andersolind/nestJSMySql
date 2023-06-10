import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersEntity } from './customers.entity/customers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
