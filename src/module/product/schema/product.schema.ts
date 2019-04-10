/* tslint:disable:no-invalid-this */
import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { NextFunction } from "express";
import { IProduct } from "../interface/product.interface";
import { Document } from "mongoose";

export type TProducts = IProduct & Document;

export const ProductSchema: Schema = new mongoose.Schema(
  {
    createdBy: {
      required: true, // This shall refer to USER collection
      type: String
    },
    description: {
      type: String
    },
    isActive: {
      default: false,
      type: Boolean
    },
    isDeleted: {
      default: false,
      type: Boolean
    },
    masterProductId: { type: Schema.Types.ObjectId, ref: "Product" },
    name: {
      type: String
    },
    price: {
      type: Number
    },
    productId: {
      type: String,
      unique: true
    },
    productType: {
      default: "Soap",
      type: String
    },
    type: {
      type: String
    },
    useTime: {
      type: String
    },
    variants: [{ type: Schema.Types.ObjectId, ref: "Product" }], // This is defined on the fly
    weight: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

ProductSchema.pre<TProducts>("save", function(next: NextFunction): void {
  try {
    if (this.productType === "stockable" && this.masterProductId === undefined) {
      throw next({ err: "Master Product ID is missing" });
    }
    next();
  } catch (error) {
    return next(error);
  }
});
