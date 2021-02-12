import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes } from "@nestjs/common";
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Stock } from "./dto/stock";
import { Service } from "./stock.service";
import { BaseController } from "../Model/controller";
import { PostDeleteValidation } from "./Validation/product.validation";
import { generateRandomAlphaNumericString } from "../../utils";
// import { StockQuery } from "./dto/stock.query";

@ApiUseTags("Stock")
@Controller("stock")
@ApiBearerAuth()
export class CustomController extends BaseController {
  constructor(private readonly stockService: Service) {
    super(stockService);
  }

  // tslint:disable-next-line
  @Post()
  @ApiOperation({ title: "Create Stock" })
  @ApiResponse(
    {
      description: "The record has been successfully created.",
      status: 201
    })
  @ApiResponse({ status: 403, description: "Forbidden." })
  public create(@Body() create: Stock): any {
    // TODO:Create here the number of Stocks
    const { stockQty, lotNo, productId } = create;
    create.createdBy = "Test-User-auto-stock.controller"; // TODO: user

    let i: number = 1;
    const documents: Stock[] = [];

    for (i; i <= stockQty; i += 1) {
      const document: Stock = {
        createdBy: create.createdBy,
        lotNo,
        productId,
        serialNumber: "MADAME-" + generateRandomAlphaNumericString(6),
        stockQty: create.stockQty
      };
      documents.push(document);
    }
    return super.create(documents, true);
  }

  // tslint:disable-next-line
  @Get()
  @ApiOperation({ title: "List Stock" })
  public async list(@Query() query: any): Promise<Stock[]> {
    if (query.page) {
      query.page = Number(query.page);
    }
    return this.stockService.list({}, query);
  }

  // tslint:disable-next-line
  @Get(":id")
  @ApiOperation({ title: "Get One Stock" })
  public async get(@Param() params: any): Promise<Stock> {
    return super.get(params);
  }

  // tslint:disable-next-line
  @Delete(":id")
  @UsePipes(new PostDeleteValidation())
  @ApiOperation({ title: "Delete Stock" })
  public delete(@Param() params: Stock): any {
    return super.delete(params);
  }
}
