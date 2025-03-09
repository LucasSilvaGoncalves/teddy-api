import { POSTGRES_DATA_SOURCE } from 'src/common/constants';
import { CLIENT_REPOSITORY } from './constants';
import { DataSource } from 'typeorm';
import { Client } from 'src/modules/client/entities/client.entity';

export const teddyRepositoriesProviders = [
  {
    provide: CLIENT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Client),
    inject: [POSTGRES_DATA_SOURCE],
  },
];
