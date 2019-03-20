import { Controller, Get, Post, Body, Param, Query, Delete, UseFilters } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./post.service";
import { IPost as Interface } from "./interface/post.interface";
import { BaseController } from "../Model/controller";
import { HttpExceptionFilter } from "../../Middleware/errors.filter";

@Controller("posts")
@UseFilters(new HttpExceptionFilter())
export class PostsController extends BaseController {
  constructor(private readonly postsService: PostsService) {
    super(postsService);
  }

  // tslint:disable-next-line
  @Post()
  public create(@Body() createPostDto: CreatePostDto): any {
    return super.create(createPostDto);
  }

  // tslint:disable-next-line
  @Get()
  public async list(@Query() query: Interface): Promise<Interface[]> {
    return super.list(query);
  }

  // tslint:disable-next-line
  @Delete(":id")
  public delete(@Param() params: Interface): any {
    return super.delete(params.id);
  }
}
