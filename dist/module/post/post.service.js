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
const create_post_dto_1 = require("./dto/create-post.dto");
const constants_1 = require("../../constants");
const model_1 = require("../Model/model");
let PostsService = class PostsService extends model_1.BaseModel {
    constructor(postModel) {
        super(postModel, create_post_dto_1.CreatePostDto);
        this.postModel = postModel;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.POST_MODEL_PROVIDER)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=post.service.js.map