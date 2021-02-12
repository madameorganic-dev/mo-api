import { Document } from "mongoose";

export interface IProduct extends Document {
  readonly createdBy: string;
  readonly productId: string;
  readonly serialNumber: string;
}
