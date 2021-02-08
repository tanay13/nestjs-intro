import { Controller,Post, Body, Get, Param } from "@nestjs/common";
import {ProductService} from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductService){}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
         @Body('desc') prodDesc: string
         ) {
        const genId = this.productService.insertProduct(prodTitle,prodDesc);
        return {id: genId};
    }

    @Get()
    listProducts()
    {
        return this.productService.listProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId : string){
        return this.productService.getSingleProduct(prodId)
    }
}
