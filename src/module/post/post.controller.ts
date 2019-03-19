import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./post.service";
import { Post as PostInterface } from "./interface/post.interface";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Post()
  private create(@Body() createPostDto: CreatePostDto): any {
    this.postsService.create(createPostDto);
  }

  @Get()
  private async findAll(): Promise<PostInterface[]> {
    return this.postsService.findAll();
  }
}
