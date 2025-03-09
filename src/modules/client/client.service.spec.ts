import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CLIENT_REPOSITORY } from 'src/infra/database/postgres/constants';
import { mockClientRepository } from './mocks/mock-client-repository';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: CLIENT_REPOSITORY,
          useValue: mockClientRepository,
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of clients', async () => {
      const result = [new Client()];
      jest.spyOn(mockClientRepository, 'find').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create and return a client', async () => {
      const client = new Client();
      jest.spyOn(mockClientRepository, 'save').mockResolvedValue(client);

      expect(await service.create(client)).toBe(client);
    });

    it('should throw an InternalServerErrorException if creation fails', async () => {
      const client = new Client();
      jest.spyOn(mockClientRepository, 'save').mockRejectedValue(new Error());

      await expect(service.create(client)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('update', () => {
    it('should update and return the client', async () => {
      const client = new Client();
      const updatedClient = {
        ...client,
        id: 1,
        name: 'teste',
        salary: 20000,
        clientSalary: 400000,
      };
      jest.spyOn(mockClientRepository, 'update').mockResolvedValue(updatedClient);

      expect(await service.update(1, client)).toEqual(updatedClient);
    });

    it('should throw a NotFoundException if client is not found', async () => {
      jest.spyOn(mockClientRepository, 'update').mockRejectedValue(new NotFoundException());
      await expect(service.update(2, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('delete', () => {
    it('should delete the client', async () => {
      jest.spyOn(mockClientRepository, 'delete').mockResolvedValue({ affected: 1, raw: {} });

      await expect(service.delete(1)).resolves.not.toThrow();
    });

    it('should throw a NotFoundException if client is not found', async () => {
      jest.spyOn(mockClientRepository, 'delete').mockResolvedValue({ affected: 0, raw: {} });

      await expect(service.delete(1)).rejects.toThrow(NotFoundException);
    });
  });
});
