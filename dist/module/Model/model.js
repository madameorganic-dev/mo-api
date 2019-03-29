"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Logger_1 = require("../../Middleware/Logger");
const common_1 = require("@nestjs/common");
class BaseModel {
    constructor(data, type) {
        this.model = data;
        this.type = type;
        this.logger = new Logger_1.LoggerService();
    }
    create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const object = new this.model(values);
                return yield object.save();
            }
            catch (error) {
                this.logger.error(`${this.model.modelName}.create Failed. Error Details :  ${error}`);
                throw new common_1.HttpException(error, 500);
            }
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let model;
                this.logger.info(`${this.model.modelName}.get one product is called`);
                if (mongoose_1.Types.ObjectId.isValid(id)) {
                    model = yield this.model.findById(id).exec();
                }
                if (model) {
                    return model;
                }
                throw new Error(`ID: ${id} for model ${this.model.modelName} not found`);
            }
            catch (error) {
                this.logger.error(`ID: ${id} for model ${this.model.modelName} not found`);
                throw new common_1.HttpException(error, 500);
            }
        });
    }
    list(params = {}, ctx = { sortBy: "createdAt", sortType: -1, perPage: 30, page: 1 }) {
        try {
            this.logger.info(`${this.model.modelName}.list params=${params} ctx=${ctx}`);
            const { perPage, page, sortBy, sortType } = ctx;
            return this.model.find(params)
                .sort({ [sortBy]: sortType })
                .skip(perPage * (page - 1))
                .limit(perPage)
                .exec();
        }
        catch (error) {
            this.logger.error(`${this.model.modelName}.list Failed. Error Details :  ${error}`);
            throw new common_1.HttpException(error, 500);
        }
    }
    update(id, values) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let model;
                if (mongoose_1.Types.ObjectId.isValid(id)) {
                    model = yield this.model.findById(id).exec();
                }
                if (!model) {
                    throw new Error(`ID: ${id} for model ${this.model.modelName} not found`);
                }
                return yield this.model.findByIdAndUpdate(id, values, { new: true });
            }
            catch (error) {
                this.logger.error(`${this.model.modelName}.update id=${id} Failed. Error Details :  ${error}`);
                throw new common_1.HttpException(error, 500);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.info(`${this.model.modelName}.delete id=${id}`);
                let model;
                if (mongoose_1.Types.ObjectId.isValid(id)) {
                    model = yield this.model.findById(id).exec();
                }
                if (model) {
                    return model.remove();
                }
                throw new Error(`ID: ${id} for model ${this.model.modelName} not found`);
            }
            catch (error) {
                this.logger.error(`${this.model.modelName}.delete id=${id} Failed. Error Details :  ${error}`);
                throw new common_1.HttpException(error, 500);
            }
        });
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=model.js.map