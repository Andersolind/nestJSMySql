import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  invoiceNumber: string;
  @Column()
  fullName: string;
  @Column()
  email: string;
  @Column()
  address: string;
  @Column()
  postalCode: string;
  @Column()
  vehicle: string;
  @Column()
  make: string;
  @Column()
  model: string;
  @Column()
  year: string;
  @Column()
  mileage: string;
  @Column()
  price: string;
  @Column()
  total: string;
  @Column()
  dateOfService: Date;
}
