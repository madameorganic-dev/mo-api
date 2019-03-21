import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./post.service";
import { IPost as Interface } from "./interface/post.interface";
import { BaseController } from "../Model/controller";
import { PostValidation } from "./Validation/post.validation";
import { ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiUseTags("Posts")
@Controller("posts")
export class PostsController extends BaseController {
  constructor(private readonly postsService: PostsService) {
    super(postsService);
  }

  // tslint:disable-next-line
  @Post()
  @UsePipes(new PostValidation())
  @ApiOperation({ title: "Create Posts" })
  @ApiResponse(
    {
      description: "The record has been successfully created.",
      status: 201
    })
  @ApiResponse({ status: 403, description: "Forbidden." })
  public create(@Body() createPostDto: CreatePostDto): any {
    return super.create(createPostDto);
  }

  // tslint:disable-next-line
  @Get()
  @ApiOperation({ title: "List Posts" })
  public async list(@Query() query: Interface): Promise<Interface[]> {
    return super.list(query);
  }

  // tslint:disable-next-line
  @Delete(":id")
  @ApiOperation({ title: "Delete Posts" })
  public delete(@Param() params: Interface): any {
    return super.delete(params.id);
  }
}
