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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_post_dto_1 = require("./dto/create-post.dto");
const post_service_1 = require("./post.service");
const controller_1 = require("../Model/controller");
const post_validation_1 = require("./Validation/post.validation");
const swagger_1 = require("@nestjs/swagger");
let PostsController = class PostsController extends controller_1.BaseController {
    constructor(postsService) {
        super(postsService);
        this.postsService = postsService;
    }
    create(createPostDto) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return yield _super.create.call(this, createPostDto);
        });
    }
    list(query) {
        const _super = Object.create(null, {
            list: { get: () => super.list }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.list.call(this, query);
        });
    }
    delete(params) {
        return super.delete(params);
    }
};
__decorate([
    common_1.Post(),
    common_1.UsePipes(new post_validation_1.PostValidation()),
    swagger_1.ApiOperation({ title: "Create Posts" }),
    swagger_1.ApiResponse({
        description: "The record has been successfully created.",
        status: 201
    }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ title: "List Posts" }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "list", null);
__decorate([
    common_1.Delete(":id"),
    common_1.UsePipes(new post_validation_1.PostDeleteValidation()),
    swagger_1.ApiOperation({ title: "Delete Posts" }),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], PostsController.prototype, "delete", null);
PostsController = __decorate([
    swagger_1.ApiUseTags("Posts"),
    common_1.Controller("posts"),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [post_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=post.controller.js.map