import { IsString,IsNumber } from "class-validator";

export class CreateProductDto{
    @IsString()
    productName:string;

    @IsNumber()
    price:number;
}