import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomersEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({nullable: true})
  invoiceNumber!: string;
  @Column({nullable: true})
  fullName?: string;
   @Column({nullable: true})
  email?: string;
   @Column({nullable: true})
  address?: string;
   @Column({nullable: true})
  postalCode?: string;
   @Column({nullable: true})
  vehicle?: string;
   @Column({nullable: true})
  make?: string;
   @Column({nullable: true})
  model?: string;
   @Column({nullable: true})
  year?: string;
   @Column({nullable: true})
  mileage?: string;
   @Column({nullable: true})
  price?: string;
   @Column({nullable: true})
  total?: string;
   @Column({nullable: true})
  dateOfService?: Date;
}
