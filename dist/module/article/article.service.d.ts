import { Model } from "mongoose";
import { IArticle } from "./interface/article.interface";
import { ArticleDto } from "./dto/article.dto";
import { BaseModel, IBaseModelParamsInterface } from "../Model/model";
interface IMongooseDefaults extends IBaseModelParamsInterface {
    userId?: string;
    articleNumber?: number;
}
declare type TProps = IArticle & IMongooseDefaults;
export declare class Service extends BaseModel {
    private readonly postModel;
    constructor(postModel: Model<IArticle>);
    create(value: ArticleDto): any;
    list({ userId, articleNumber }: TProps): any;
}
export {};
