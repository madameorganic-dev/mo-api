"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PostSchema = new mongoose.Schema({
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
        ref: "Article",
        required: true,
        type: mongoose.SchemaTypes.ObjectId
    }
}, {
    timestamps: true
});
//# sourceMappingURL=post.schema.js.map