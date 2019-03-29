import { Stock } from "./dto/stock";
import { Service } from "./stock.service";
import { BaseController } from "../Model/controller";
export declare class CustomController extends BaseController {
    private readonly postsService;
    constructor(postsService: Service);
    create(createPostDto: Stock): Stock;
    list(query: any): Promise<Stock[]>;
    get(params: any): Promise<Stock>;
    delete(params: Stock): any;
}
