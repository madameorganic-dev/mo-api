import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto as DTO } from './dto/cats.dto';
import { CatSchema as Schema } from './schemas/cat.schema';
import { CAT_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class PostsService {
  constructor(
    @Inject(CAT_MODEL_PROVIDER) private readonly postModel: Model<DTO>) {
  }

  async create(createPostDto: DTO): Promise<DTO> {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  async findAll(): Promise<DTO[]> {
    return await this.postModel.find().exec();
  }
}
