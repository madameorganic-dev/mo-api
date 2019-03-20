import { Document } from "mongoose";

export interface IPost extends Document {
  readonly articleNumber: number;
  readonly title: string;
  readonly content: string;
  readonly userId: string;
}
