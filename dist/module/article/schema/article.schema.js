"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ArticleSchema = new mongoose.Schema({
    articleNumber: {
        require: true,
        type: Number
    },
    content: {
        required: false,
        type: String
    },
    title: {
        required: true,
        type: String,
        unique: true
    },
    userId: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId
    }
}, {
    timestamps: true
});
//# sourceMappingURL=article.schema.js.map