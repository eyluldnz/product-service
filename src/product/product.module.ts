import { Module } from '@nestjs/common';
import { CreateController } from './controllers/create/create.controller';
import { ListController } from './controllers/list/list.controller';

@Module({
  controllers: [CreateController, ListController]
})
export class ProductModule {}
