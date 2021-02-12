import { Model, Types } from "mongoose";
import { Injectable, Inject, HttpException } from "@nestjs/common";

import {
  IVerificationHistory,
  IVerificationHistoryResponse,
  IVerificationHistoryErrorResponse
} from "./interface/verificationHistory.interface";
import { VerificationHistory } from "./dto/verificationHistory";
import { VERIFICATION_HISTORY_MODEL_PROVIDER } from "../../constants";
import { BaseModel } from "../Model/model";

@Injectable()
export class Service extends BaseModel {
  constructor(
    @Inject(VERIFICATION_HISTORY_MODEL_PROVIDER) private readonly historyModel: Model<IVerificationHistory>) {
    super(historyModel, VerificationHistory);
  }

  public async verify(serialNumber: string, verifiedBy: string): Promise<IVerificationHistoryResponse | IVerificationHistoryErrorResponse> {
    try {
      // if (Types.ObjectId.isValid(serialNumber)) {
      const history = await this.historyModel
        .find({ serialNumber })
        .exec();

      const newVerification = await this.addHistory(serialNumber, verifiedBy);
      // if history exists, send verification failed and make an entry
      if (history.length) {
        return {
          error: true,
          reason: "This product code has already been verified. The product might be fake if you haven't verified it before.",
          verificationCount: history.length
        };
      }

      return {
        error: false,
        serialNumber: newVerification.serialNumber,
        verificationCount: 0
      };
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  private async addHistory(id: string, userId: string): Promise<IVerificationHistory> {
    try {
      return this.historyModel.create(
        {
          serialNumber: id,
          verifiedBy: userId
        }
      );
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}
