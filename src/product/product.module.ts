import { Module } from '@nestjs/common';
import { CreateController } from './controllers/create/create.controller';
import { ListController } from './controllers/list/list.controller';
import { ProductService } from './services/product.service';

@Module({
  controllers: [CreateController, ListController],
  providers:[ProductService]
})
export class ProductModule {}
