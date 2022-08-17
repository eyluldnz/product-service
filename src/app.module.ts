import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ HealthModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
