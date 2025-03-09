import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const SqlServerDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  schema: 'dto',
  port: +(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  logging: process.env.NODE_ENV === 'development',
});

export default SqlServerDataSource;
