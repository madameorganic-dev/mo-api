"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common_1 = require("@nestjs/common");
let JoiValidationPipe = class JoiValidationPipe {
    transform(value, metadata) {
        const result = Joi.validate(value, this.buildSchema());
        if (result.error !== null) {
            throw new common_1.HttpException({
                detail: result.error.message.replace(/"/g, `'`),
                message: "Validation failed",
                statusCode: common_1.HttpStatus.BAD_REQUEST
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return result.value;
    }
};
JoiValidationPipe = __decorate([
    common_1.Injectable()
], JoiValidationPipe);
exports.JoiValidationPipe = JoiValidationPipe;
//# sourceMappingURL=validation.pipe.js.map