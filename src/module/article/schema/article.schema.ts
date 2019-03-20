import * as mongoose from "mongoose";

export const ArticleSchema = new mongoose.Schema(
  {
    articleNumber: {
      require: true,
      type: Number
    },
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
