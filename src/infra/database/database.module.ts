import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { teddyRepositoriesProviders } from './postgres/teddy-repositories.providers';
@Module({
  providers: [...databaseProviders, ...teddyRepositoriesProviders],
  exports: [...databaseProviders, ...teddyRepositoriesProviders],
})
export class DatabaseModule {}
