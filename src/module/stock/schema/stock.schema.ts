import * as mongoose from "mongoose";
import { Schema } from "mongoose";

export const StockSchema: Schema = new mongoose.Schema(
  {
    createdBy: {
      required: true, // This shall refer to USER collection
      type: String
    },
    lotNo: {
      type: String
    },
    productId: {
      ref: "Product",
      type: Schema.Types.ObjectId
    },
    serialNumber: {
      required: "true",
      type: String,
      unique: "true"
    },
    verificationCount: {
      default: 0,
      required: "true",
      type: Number
    },
    verifiedBy: {
      required: "true",
      type: String,
      unique: "true"
      // ref: "User",
      // type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);
