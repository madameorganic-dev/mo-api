import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";

import { Post } from "./interface/post.interface";
import { CreatePostDto } from "./dto/create-post.dto";
import { POST_MODEL_PROVIDER } from "../../constants";

@Injectable()
export class PostsService {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<Post>) {
  }

  public async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  public async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }
}
