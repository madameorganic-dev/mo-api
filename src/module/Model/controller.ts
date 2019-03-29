import { Body, Delete, Get, Param, Post, Query, Put } from "@nestjs/common";

export abstract class BaseController {
  private readonly controller: any;

  protected constructor(controller: any) {
    this.controller = controller;
  }

  @Post()
  public create(@Body() values: any, many: boolean = false): any {
    return this.controller.create(values, many);
  }

  @Get()
  public async list(@Query() query: any): Promise<any[]> {
    return this.controller.list(query);
  }

  @Get(":id")
  public async get(@Param() params: any): Promise<any> {
    return this.controller.get(params.id, params.values);
  }

  @Put(":id")
  public async update(@Param() params: any, @Body() values: any): Promise<any> {
    return this.controller.update(params.id, values);
  }

  @Delete(":id")
  public async delete(@Param() params: any): Promise<any[]> {
    return this.controller.delete(params.id);
  }
}
