import { Model, Types } from "mongoose";
import { Injectable, Inject, HttpException } from "@nestjs/common";
import { IProduct, IStockVerificationResponse } from "./interface/stock.interface";
import { Stock } from "./dto/stock";
import { STOCK_MODEL_PROVIDER } from "../../constants";
import { BaseModel } from "../Model/model";

@Injectable()
export class Service extends BaseModel {
  constructor(
    @Inject(STOCK_MODEL_PROVIDER) private readonly stockModel: Model<IProduct>) {
    super(stockModel, Stock);
  }

  public async verify(serialNumber: string): Promise<IStockVerificationResponse> {
    try {
      let model;
      // if (Types.ObjectId.isValid(serialNumber)) {
      if (serialNumber) {
        model = await this.stockModel
          .find({ serialNumber })
          .exec();
      }
      if (model) {
        const { verificationCount = 0 } = model;
        const newCount = verificationCount + 1;
        console.warn("Updating data", verificationCount, newCount, model);
        // Update: verifiedBy: User & verificationCount: number
        model = await this.stockModel.findOneAndUpdate(
          { $or: [{ serialNumber }, { _id: serialNumber }] }, {
          $set: {
            verificationCount: newCount,
            verifiedBy: "Test-User"
          }
        });
        return model;
      }
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
