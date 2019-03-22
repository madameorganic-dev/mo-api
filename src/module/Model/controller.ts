import { Body, Delete, Get, Param, Post, Query } from "@nestjs/common";

export abstract class BaseController {
  private readonly controller: any;

  protected constructor(controller: any) {
    this.controller = controller;
  }

  @Post()
  public create(@Body() values: any): any {
    this.controller.create(values);
  }

  @Get()
  public async list(@Query() query: any): Promise<any[]> {
    return this.controller.list(query);
  }

  @Delete(":id")
  public async delete(@Param() params: any): Promise<any[]> {
    return this.controller.delete(params.id);
  }
}
