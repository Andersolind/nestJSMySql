export class CustomerDTO {

  id?: number;

  invoiceNumber!: string;
  
  description!: string;

  fullName!: string;

  email!: string;

  address?: string;

  postalCode?: string;

  vehicle?: string;

  make?: string;

  model?: string;

  year?: string;

  mileage?: string;

  price?: string;

  total?: string;

  dateOfService?: Date;
}