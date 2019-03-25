import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { IPost } from "./interface/post.interface";
import { CreatePostDto } from "./dto/create-post.dto";
import { POST_MODEL_PROVIDER } from "../../constants";
import { BaseModel } from "../Model/model";

@Injectable()
export class PostsService extends BaseModel {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<IPost>) {
    super(postModel, CreatePostDto);
  }
}
