import * as mongoose from "mongoose";
import { Schema } from "mongoose";

export const StockSchema: Schema = new mongoose.Schema(
  {
    createdBy: {
      required: true, // This shall refer to USER collection
      type: String
    },
    lotNo: {
      type: "string"
    },
    productId: {
      ref: "Product",
      type: Schema.Types.ObjectId
    },
    serialnumber: {
      required: "true",
      type: "string",
      unique: "true"
    }

  },
  {
    timestamps: true
  }
);
