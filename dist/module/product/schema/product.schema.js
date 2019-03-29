"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ProductSchema = new mongoose.Schema({
    createdBy: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    isActive: {
        default: false,
        type: Boolean
    },
    isDeleted: {
        default: false,
        type: Boolean
    },
    masterProductId: {
        type: { type: Schema.Types.ObjectId, ref: "Stock" }
    },
    name: {
        required: true,
        type: String
    },
    productId: {
        required: true,
        type: String,
        unique: true
    },
    productType: {
        default: "Soap",
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    useTime: {
        type: String
    }
}, {
    timestamps: true
});
//# sourceMappingURL=product.schema.js.map