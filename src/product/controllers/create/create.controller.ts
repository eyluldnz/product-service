import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { BaseController } from 'src/common/controllers/base.controller';
import { CreateProductDto } from 'src/product/dtos/create/create-product.dto';

@Controller('create')
export class CreateController extends BaseController {
@Post('v1/product')
async createProduct(@Body(new ValidationPipe()) body:CreateProductDto){
    console.log(body);
}
}
