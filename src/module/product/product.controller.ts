import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes, UseGuards } from "@nestjs/common";
import { Product, ProductVariant } from "./dto/product";
import { Service } from "./product.service";
import { BaseController } from "../Model/controller";
import { PostDeleteValidation } from "./Validation/product.validation";
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiUseTags("Products")
@Controller("products")
@ApiBearerAuth()
export class CustomController extends BaseController {
  constructor(private readonly postsService: Service) {
    super(postsService);
  }

  // tslint:disable-next-line
  @Post()
  @ApiOperation({ title: "Create Products" })
  @ApiResponse(
    {
      description: "The record has been successfully created.",
      status: 201
    })
  @ApiResponse({ status: 403, description: "Forbidden." })
  public create(@Body() createPostDto: Product): Product {
    createPostDto.productType = "master";
    return super.create(createPostDto);
  }

  // tslint:disable-next-line
  @Post("variant")
  @ApiOperation({ title: "Create Products" })
  @ApiResponse(
    {
      description: "The record has been successfully created.",
      status: 201
    })
  @ApiResponse({ status: 403, description: "Forbidden." })
  public createVariant(@Body() createPostDto: ProductVariant): Product {
    createPostDto.createdBy = "sijan-shrestha-auto"; // TODO: remove me from here
    createPostDto.productType = "stockable";
    createPostDto.productId = "" + createPostDto.price + createPostDto.masterProductId;
    return super.create(createPostDto);
  }

  // tslint:disable-next-line
  @Get()
  @UseGuards(AuthGuard("jwt"))
  @ApiOperation({ title: "List Products" })
  public async list(@Query() query: any): Promise<Product[]> {
    return super.list(query);
  }

  // tslint:disable-next-line
  @Get(":id")
  @ApiOperation({ title: "Get One Stock" })
  public async get(@Param() params: any): Promise<any> {
    const doc = await super.get(params);
    if (doc.productType === "master") {
      const query = { masterProductId: doc._id };
      const result = await this.list(query);
      doc.variants = result; // FIXME: find a solution for me , i do not want to stay like this in here
    }
    return doc;
  }

  // tslint:disable-next-line
  @Delete(":id")
  @UsePipes(new PostDeleteValidation())
  @ApiOperation({ title: "Delete Products" })
  public delete(@Param() params: Product): any {
    return super.delete(params);
  }
}
