import { Model, Types } from "mongoose";
import { Injectable, Inject, HttpException } from "@nestjs/common";
import { IProduct } from "./interface/stock.interface";
import { Stock } from "./dto/stock";
import { STOCK_MODEL_PROVIDER } from "../../constants";
import { BaseModel } from "../Model/model";

@Injectable()
export class Service extends BaseModel {
  constructor(
    @Inject(STOCK_MODEL_PROVIDER) private readonly stockModel: Model<IProduct>) {
    super(stockModel, Stock);
  }
}
