import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'src/modules/client/entities/client.entity';

export class ClientDto {
  constructor(client: Client) {
    this.name = client.name;
    this.salary = client.salary;
    this.clientSalary = client.clientSalary;
  }

  @ApiProperty({
    description: 'Nome do cliente',
  })
  name: string;

  @ApiProperty({
    description: 'Salário do cliente',
  })
  salary: number;

  @ApiProperty({
    description: 'Salário da empresa do cliente',
  })
  clientSalary: number;
}
