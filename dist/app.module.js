"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const post_module_1 = require("./module/post/post.module");
const article_module_1 = require("./module/article/article.module");
const product_module_1 = require("./module/product/product.module");
const stock_module_1 = require("./module/stock/stock.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [post_module_1.PostModule, article_module_1.ArticleModule, product_module_1.ProductModule, stock_module_1.StockModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map