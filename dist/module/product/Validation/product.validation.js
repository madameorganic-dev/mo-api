"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_pipe_1 = require("../../../Validation/validation.pipe");
class ProductValidation extends validation_pipe_1.JoiValidationPipe {
    buildSchema() {
        return Joi.object({
            description: Joi.string().required(),
            name: Joi.string().required().max(50),
            productId: Joi.string().required()
        });
    }
}
exports.ProductValidation = ProductValidation;
class PostDeleteValidation extends validation_pipe_1.JoiValidationPipe {
    buildSchema() {
        return Joi.object({
            id: Joi.string().required()
        });
    }
}
exports.PostDeleteValidation = PostDeleteValidation;
//# sourceMappingURL=product.validation.js.map