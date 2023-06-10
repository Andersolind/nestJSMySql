import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersEntity } from './customers/customers.entity/customers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mimico',
      database: 'customers',
      entities: [CustomersEntity],
      synchronize: true,
      dropSchema: true,
    }),
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
