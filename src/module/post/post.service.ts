import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import * as lodash from "lodash";

const { omitBy, isNil } = lodash;
import { IPost } from "./interface/post.interface";
import { CreatePostDto } from "./dto/create-post.dto";
import { POST_MODEL_PROVIDER } from "../../constants";
import { BaseModel, IBaseModelParamsInterface } from "../Model/model";

interface IMongooseDefaults extends IBaseModelParamsInterface {
  userId?: string;
}

type TProps = IPost & IMongooseDefaults;

@Injectable()
export class PostsService extends BaseModel {

  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<IPost>) {
    super(postModel, CreatePostDto);
  }

  public create(createPostDto: CreatePostDto): IPost {
    const createdPost = new this.postModel(createPostDto); // Use this to make sure the type is correct, can remove this by default
    return super.create(createdPost);
  }

  /**
   * List Model in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<Model[]>}
   */
  public list({ userId }: TProps): any {
    const options = omitBy({ userId }, isNil);
    return super.list(options, { sortType: 1 }); // overwritten sort type to be Ascending
  }
}
