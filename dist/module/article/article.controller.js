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
const article_dto_1 = require("./dto/article.dto");
const article_service_1 = require("./article.service");
const controller_1 = require("../Model/controller");
const swagger_1 = require("@nestjs/swagger");
let CustomController = class CustomController extends controller_1.BaseController {
    constructor(postsService) {
        super(postsService);
        this.postsService = postsService;
    }
    create(values) {
        return super.create(values);
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
        return super.delete(params.id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ title: "Create Article" }),
    swagger_1.ApiResponse({
        description: "The record has been successfully created.",
        status: 201
    }),
    swagger_1.ApiResponse({ status: 403, description: "Forbidden." }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.ArticleDto]),
    __metadata("design:returntype", Object)
], CustomController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomController.prototype, "list", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CustomController.prototype, "delete", null);
CustomController = __decorate([
    swagger_1.ApiUseTags("Article"),
    common_1.Controller("article"),
    __metadata("design:paramtypes", [article_service_1.Service])
], CustomController);
exports.CustomController = CustomController;
//# sourceMappingURL=article.controller.js.map