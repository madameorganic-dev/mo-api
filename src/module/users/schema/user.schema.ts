import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true
    },
    name: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    }
  },
  {
    timestamps: true
  }
);
