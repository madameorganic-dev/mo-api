import { Document } from "mongoose";

export class CreateCatDto extends Document {
  public name: string;
  public age: number;
  public breed: string;
}
