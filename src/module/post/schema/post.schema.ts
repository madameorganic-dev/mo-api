import * as mongoose from "mongoose";

export const PostSchema = new mongoose.Schema(
  {
    content: {
      required: false,
      type: String
    },
    title: {
      required: true,
      type: String,
      unique: true
    },
    userId: {
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    }
  },
  {
    timestamps: true
  }
);
