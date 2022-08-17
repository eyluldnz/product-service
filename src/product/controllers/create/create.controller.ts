import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { BaseController } from 'src/common/controllers/base.controller';
import { CreateProductDto } from 'src/product/dtos/create/create-product.dto';
import { IProduct } from 'src/product/interfaces/products.interface';
import { ProductService } from 'src/product/services/product.service';

@Controller('create')
export class CreateController extends BaseController {
    constructor(
        private productService: ProductService
    ) {
        super()
    }
    @Post('v1/product')
    async createProduct(@Body(new ValidationPipe()) body: CreateProductDto): Promise<IProduct> {
        return this.productService.createProduct(body);
    }
}
