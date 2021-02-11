import { Model, Types } from "mongoose";
import { LoggerService } from "../../Middleware/Logger";
// import { RpcException } from "@nestjs/microservices";
import { HttpException } from "@nestjs/common";
export interface IBaseModelParamsInterface {
  options?: any;

  [propName: string]: any;
}

export interface IBaseModelCtxInterface {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortType?: number;

  [propName: string]: any;
}

export abstract class BaseModel {
  private readonly model: Model<any>;
  private readonly type: any;
  private readonly logger: LoggerService;

  protected constructor(data: any, type: any) {
    this.model = data;
    this.type = type;
    this.logger = new LoggerService();
  }

  /**
   * This function creates and store values in the database
   * @param values
   */

  public async create(values: any, many: boolean): Promise<any> {
    try {
      if (many) {
        return await this.model.insertMany(values);
      } else {
        const object = new this.model(values);
        return await object.save();
      }
    } catch (error) {
      this.logger.error(`${this.model.modelName}.create Failed. Error Details :  ${error}`);
      throw new HttpException(error, 500);
    }
  }

  /**
   * Get Model information by Id
   * @param id
   * @return Model<any>
   */
  public async get(id: string): Promise<any> {
    try {
      let model;
      this.logger.info(`${this.model.modelName}.get one product is called`);
      if (Types.ObjectId.isValid(id)) {
        model = await this.model.findById(id).exec();
      }
      if (model) {
        return model;
      }
      throw new Error(`ID: ${id} for model ${this.model.modelName} not found`);
    } catch (error) {
      this.logger.error(`ID: ${id} for model ${this.model.modelName} not found`);
      throw new HttpException(error, 500);
    }
  }

  /**
   * List Model in descending order of 'createdAt' timestamp.
   *
   * @returns {Promise<Model[]>}
   * @param params
   * @param ctx
   */
  public list(
    params: IBaseModelParamsInterface = {},
    ctx: IBaseModelCtxInterface = { sortBy: "createdAt", sortType: -1, perPage: 30, page: 1 }
  ): any {
    try {
      this.logger.info(`${this.model.modelName}.list params=${params} ctx=${ctx}`);
      const { perPage, page, sortBy, sortType } = ctx;
      return this.model.find(params)
        .sort({ [sortBy]: sortType })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .exec();
    } catch (error) {
      this.logger.error(`${this.model.modelName}.list Failed. Error Details :  ${error}`);
      throw new HttpException(error, 500);
    }
  }

  /**
   * update
   */
  public async update(id: string, values: any): Promise<void> {
    try {
      let model;
      if (Types.ObjectId.isValid(id)) {
        model = await this.model.findById(id).exec();
      }
      if (!model) {
        throw new Error(
          `ID: ${id} for model ${this.model.modelName} not found`
        );
      }
      return await this.model.findByIdAndUpdate(id, values, { new: true });
    } catch (error) {
      this.logger.error(`${this.model.modelName}.update id=${id} Failed. Error Details :  ${error}`);
      throw new HttpException(error, 500);
    }
  }

  /**
   * Delete
   * @public
   */
  public async delete(id: string): Promise<void> {
    try {
      this.logger.info(`${this.model.modelName}.delete id=${id}`);
      let model;

      if (Types.ObjectId.isValid(id)) {
        model = await this.model.findById(id).exec();
      }
      if (model) {
        return model.remove();
      }
      throw new Error(
        `ID: ${id} for model ${this.model.modelName} not found`
      );
    } catch (error) {
      this.logger.error(`${this.model.modelName}.delete id=${id} Failed. Error Details :  ${error}`);
      throw new HttpException(error, 500);
    }
  }
}
