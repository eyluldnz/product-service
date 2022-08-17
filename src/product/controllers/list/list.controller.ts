import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/common/controllers/base.controller';
import { IProduct } from 'src/product/interfaces/products.interface';
import { ProductService } from 'src/product/services/product.service';

@Controller('list')
export class ListController extends BaseController {
    constructor(
        private productService: ProductService
    ) {
        super()
    }
    @Get('v1/products')
    async getProducts():Promise<Array<IProduct>> {
        return this.productService.getProducts();
    }
}
