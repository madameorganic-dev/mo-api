"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = require("./schema/product.schema");
const constants_1 = require("../../constants");
exports.Provider = [
    {
        inject: [constants_1.DB_PROVIDER],
        provide: constants_1.PROJECT_MODEL_PROVIDER,
        useFactory: (connection) => connection.model("Stock", product_schema_1.ProductSchema)
    }
];
//# sourceMappingURL=product.providers.js.map