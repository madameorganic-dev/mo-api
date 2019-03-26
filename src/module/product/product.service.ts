import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { IProduct } from "./interface/product.interface";
import { Product } from "./dto/product";
import { PROJECT_MODEL_PROVIDER } from "../../constants";
import { BaseModel } from "../Model/model";

@Injectable()
export class Service extends BaseModel {
  constructor(
    @Inject(PROJECT_MODEL_PROVIDER) private readonly postModel: Model<IProduct>) {
    super(postModel, Product);
  }
}
