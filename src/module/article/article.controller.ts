import { Controller, Get, Post, Body, Param, Query, Delete } from "@nestjs/common";
import { ArticleDto } from "./dto/article.dto";
import { Service } from "./article.service";
import { IArticle as Interface } from "./interface/article.interface";
import { BaseController } from "../Model/controller";
import { ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiUseTags("Article")
@Controller("article")
export class CustomController extends BaseController {
  constructor(private readonly postsService: Service) {
    super(postsService);
  }

  // tslint:disable-next-line
  @Post()
  @ApiOperation({ title: "Create Article" })
  @ApiResponse(
    {
      description: "The record has been successfully created.",
      status: 201
    })
  @ApiResponse({ status: 403, description: "Forbidden." })
  public create(@Body() values: ArticleDto): any {
    return super.create(values);
  }

  // tslint:disable-next-line
  @Get()
  public async list(@Query() query: Interface): Promise<Interface[]> {
    return super.list(query);
  }

  @Delete(":id")
  public delete(@Param() params: Interface): any {
    return super.delete(params.id);
  }
}
