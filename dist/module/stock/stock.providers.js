"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stock_schema_1 = require("./schema/stock.schema");
const constants_1 = require("../../constants");
exports.Provider = [
    {
        inject: [constants_1.DB_PROVIDER],
        provide: constants_1.STOCK_MODEL_PROVIDER,
        useFactory: (connection) => connection.model("Stock", stock_schema_1.StockSchema)
    }
];
//# sourceMappingURL=stock.providers.js.map