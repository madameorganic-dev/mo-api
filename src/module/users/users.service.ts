import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { BaseModel } from "../Model/model";
import { USER_MODEL_PROVIDER } from "../../constants";

@Injectable()
export class Service extends BaseModel {
    constructor(
        @Inject(USER_MODEL_PROVIDER) private readonly postModel: Model<any>) {
        super(postModel, { name: String });
      }
}
