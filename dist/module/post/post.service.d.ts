import { Model } from "mongoose";
import { IPost } from "./interface/post.interface";
import { BaseModel } from "../Model/model";
export declare class PostsService extends BaseModel {
    private readonly postModel;
    constructor(postModel: Model<IPost>);
}
