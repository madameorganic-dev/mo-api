import { ArticleDto } from "./dto/article.dto";
import { Service } from "./article.service";
import { IArticle as Interface } from "./interface/article.interface";
import { BaseController } from "../Model/controller";
export declare class CustomController extends BaseController {
    private readonly postsService;
    constructor(postsService: Service);
    create(values: ArticleDto): any;
    list(query: Interface): Promise<Interface[]>;
    delete(params: Interface): any;
}
