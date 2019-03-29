import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StockSchema = new mongoose.Schema(
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