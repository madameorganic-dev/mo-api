import { Model, Types } from "mongoose";
import { Injectable, Inject, HttpException } from "@nestjs/common";
// import { IProduct } from "./interface/product.interface";
import { Product } from "./dto/product";
import { PROJECT_MODEL_PROVIDER } from "../../constants";
import { BaseModel } from "../Model/model";
import { TProducts } from "./schema/product.schema";
import { LoggerService } from "../../Middleware/Logger";

@Injectable()
export class Service extends BaseModel {
  constructor(
    @Inject(PROJECT_MODEL_PROVIDER) private readonly postModel: Model<TProducts>) {
    super(postModel, Product);
  }

  public async get(id: string): Promise<any> {
    try {
      let model;
      if (Types.ObjectId.isValid(id)) {
        model = await this.postModel
          .findById(id)
          .populate("variants")
          .populate("masterProductId")
          .exec();
      }
      if (model) {
        return model;
      }
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
