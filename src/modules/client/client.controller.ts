import { Controller, Get, Put, Post, Delete, Body, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';

@ApiTags('clients')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @ApiOkResponse({
    description: 'Lista clientes',
  })
  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @ApiOkResponse({
    description: 'Cliente criado.',
  })
  @Post()
  async create(@Body() client: Client): Promise<Client> {
    return this.clientService.create(client);
  }

  @ApiOkResponse({
    description: 'Cliente editado.',
  })
  @Put(':id')
  async update(@Param('id') id: number, @Body() client: Partial<Client>): Promise<Client> {
    return this.clientService.update(id, client);
  }

  @ApiOkResponse({
    description: 'Cliente excluido!',
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.clientService.delete(id);
  }
}
