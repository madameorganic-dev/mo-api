import { Product } from "./dto/product";
import { Service } from "./product.service";
import { BaseController } from "../Model/controller";
export declare class CustomController extends BaseController {
    private readonly postsService;
    constructor(postsService: Service);
    create(createPostDto: Product): Product;
    list(query: any): Promise<Product[]>;
    get(params: any): Promise<Product>;
    delete(params: Product): any;
}
