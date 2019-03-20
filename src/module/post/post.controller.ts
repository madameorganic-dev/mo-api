import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./post.service";
import { IPost as Interface } from "./interface/post.interface";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Post()
  private create(@Body() createPostDto: CreatePostDto): any {
    this.postsService.create(createPostDto);
  }

  @Get()
  private async list(@Query() query: Interface): Promise<Interface[]> {
    return this.postsService.list(query);
  }
}
