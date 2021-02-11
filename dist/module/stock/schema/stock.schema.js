"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.StockSchema = new mongoose.Schema({
    createdBy: {
        required: true,
        type: String
    },
    productId: [
        { type: Schema.Types.ObjectId, ref: "Product" }
    ],
    serialNumber: {
        required: "true",
        type: "string",
        unique: "true"
    }
}, {
    timestamps: true
});
//# sourceMappingURL=stock.schema.js.map
