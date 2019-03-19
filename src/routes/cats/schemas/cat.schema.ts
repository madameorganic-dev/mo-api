import * as mongoose from "mongoose";

export const CatSchema = new mongoose.Schema(
  {
    age: Number,
    breed: String,
    name: String
  });
