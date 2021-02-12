import * as mongoose from "mongoose";
import { Schema } from "mongoose";

export const VerificationHistorySchema: Schema = new mongoose.Schema(
  {
    createdBy: {
      type: String
    },
    serialNumber: {
      required: true,
      type: String
      // ref: "Stock",
      // type: Schema.Types.ObjectId
    },
    verifiedBy: {
      required: true,
      type: String
      // ref: "User",
      // type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);
