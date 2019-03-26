import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
      unique: true
    },
    name: {
      required: false,
      type: String
    },
    productId: {
      required: true,
      type: String,
      unique: true
    }
  },
  {
    timestamps: true
  }
);
