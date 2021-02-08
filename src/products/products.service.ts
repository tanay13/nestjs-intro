import {Injectable, NotFoundException} from '@nestjs/common';
import {Product} from './product.model';

@Injectable()
export class ProductService {
    private products: Product[] = [];

    insertProduct(title:string , desc: string){

        const ProdId = Math.random().toString();
        const newProduct = new Product(ProdId,title,desc);
        this.products.push(newProduct);
        return ProdId;
    }

    listProducts()
    {
        return [... this.products]
    }

    getSingleProduct(ProductId: string){
        const product = this.products.find((prod)=>prod.id===ProductId);
        if(!product)
        {
            throw new NotFoundException('nothing is there with that id');
        }
        return {...product};
    }
}