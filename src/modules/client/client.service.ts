import {
  Inject,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CLIENT_REPOSITORY } from 'src/infra/database/postgres/constants';

@Injectable()
export class ClientService {
  private readonly logger = new Logger(ClientService.name);
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async create(client: Client): Promise<Client> {
    try {
      const savedClient = await this.clientRepository.save(client);
      this.logger.log(`Client created, payload: ${JSON.stringify(client)}`);
      return savedClient;
    } catch (err) {
      this.logger.error(
        `Failed to create client, payload: ${JSON.stringify(client)} | error: ${err}`,
      );
      throw new InternalServerErrorException('Falha ao criar cliente');
    }
  }

  async update(id: number, client: Partial<Client>): Promise<Client> {
    await this.clientRepository.update(id, client);
    const updatedClient = await this.clientRepository.findOneBy({ id });
    this.logger.log(`Client found, ID: ${id}`);
    if (!updatedClient) {
      this.logger.error(`Client not found, ID: ${id}`);
      throw new NotFoundException(`Cliente não encontrado, ID: ${id}`);
    }
    return updatedClient;
  }

  async delete(id: number): Promise<void> {
    const result = await this.clientRepository.delete(id);
    this.logger.log(`Client found, ID: ${id}`);
    if (result.affected === 0) {
      this.logger.error(`Client not found, ID: ${id}`);
      throw new NotFoundException(`Cliente não encontrado, ID: ${id}`);
    }
  }
}
