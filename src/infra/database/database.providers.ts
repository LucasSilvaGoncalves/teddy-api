import { POSTGRES_DATA_SOURCE } from 'src/common/constants';
import SqlServerDataSource from './postgres/postgres.data-source';

export const databaseProviders = [
  {
    provide: POSTGRES_DATA_SOURCE,
    useFactory: async () => {
      const dataSource = SqlServerDataSource;

      return dataSource.initialize();
    },
  },
];
