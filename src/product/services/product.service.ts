import { Injectable } from '@nestjs/common'
import { CreateProductDto } from '../dtos/create/create-product.dto'
import { IProduct } from '../interfaces/products.interface'
@Injectable()
export class ProductService {
    getProducts(): Promise<Array<IProduct>> {
        return new Promise<Array<IProduct>>((resolve) => {
            resolve(staticData)
        })
    };

    createProduct(productDto: CreateProductDto): Promise<IProduct> {
        const result: IProduct = productDto;
        return new Promise<IProduct>((resolve) => {
            resolve(result);
        })
            ;
    }
}

const staticData: Array<IProduct> = [
    {
        productName: 'Süt',
        price: 3
    }
];