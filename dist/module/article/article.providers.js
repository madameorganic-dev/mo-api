"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const article_schema_1 = require("./schema/article.schema");
const constants_1 = require("../../constants");
exports.articleProvider = [
    {
        inject: [constants_1.DB_PROVIDER],
        provide: constants_1.ARTICLE_MODEL_PROVIDER,
        useFactory: (connection) => connection.model("Article", article_schema_1.ArticleSchema)
    }
];
//# sourceMappingURL=article.providers.js.map