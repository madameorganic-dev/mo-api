"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_pipe_1 = require("../../../Validation/validation.pipe");
class PostValidation extends validation_pipe_1.JoiValidationPipe {
    buildSchema() {
        return Joi.object({
            content: Joi.string().required().max(50),
            title: Joi.string().required(),
            userId: Joi.string().required()
        });
    }
}
exports.PostValidation = PostValidation;
class PostDeleteValidation extends validation_pipe_1.JoiValidationPipe {
    buildSchema() {
        return Joi.object({
            id: Joi.string().required()
        });
    }
}
exports.PostDeleteValidation = PostDeleteValidation;
//# sourceMappingURL=post.validation.js.map