import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import * as lodash from "lodash";

const { omitBy, isNil } = lodash;
import { IArticle } from "./interface/article.interface";
import { ArticleDto } from "./dto/article.dto";
import { ARTICLE_MODEL_PROVIDER } from "../../constants";
import { BaseModel, IBaseModelParamsInterface } from "../Model/model";

interface IMongooseDefaults extends IBaseModelParamsInterface {
  userId?: string;
  articleNumber?: number;
}

type TProps = IArticle & IMongooseDefaults;

@Injectable()
export class Service extends BaseModel {

  constructor(
    @Inject(ARTICLE_MODEL_PROVIDER) private readonly postModel: Model<IArticle>) {
    super(postModel, ArticleDto);
  }

  public create(value: ArticleDto): any {
    const createdPost = new this.postModel(value); // Use this to make sure the type is correct, can remove this by default
    return super.create(createdPost);
  }

  /**
   * List Model in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of users to be skipped.
   * @returns {Promise<Model[]>}
   */
  public list({ userId, articleNumber }: TProps): any {
    const options = omitBy({ userId, articleNumber }, isNil);
    return super.list(options, { sortType: 1 }); // overwritten sort type to be Ascending
  }
}
