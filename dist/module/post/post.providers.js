"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_schema_1 = require("./schema/post.schema");
const constants_1 = require("../../constants");
exports.postsProviders = [
    {
        inject: [constants_1.DB_PROVIDER],
        provide: constants_1.POST_MODEL_PROVIDER,
        useFactory: (connection) => connection.model("Post", post_schema_1.PostSchema)
    }
];
//# sourceMappingURL=post.providers.js.map