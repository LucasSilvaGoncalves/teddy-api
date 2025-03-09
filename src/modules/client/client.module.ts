import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
