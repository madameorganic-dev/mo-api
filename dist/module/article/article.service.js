"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const lodash = require("lodash");
const { omitBy, isNil } = lodash;
const article_dto_1 = require("./dto/article.dto");
const constants_1 = require("../../constants");
const model_1 = require("../Model/model");
let Service = class Service extends model_1.BaseModel {
    constructor(postModel) {
        super(postModel, article_dto_1.ArticleDto);
        this.postModel = postModel;
    }
    create(value) {
        const createdPost = new this.postModel(value);
        return super.create(createdPost);
    }
    list({ userId, articleNumber }) {
        const options = omitBy({ userId, articleNumber }, isNil);
        return super.list(options, { sortType: 1 });
    }
};
Service = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.ARTICLE_MODEL_PROVIDER)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], Service);
exports.Service = Service;
//# sourceMappingURL=article.service.js.map