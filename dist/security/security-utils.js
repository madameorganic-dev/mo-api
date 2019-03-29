"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const PAYLOAD_COMPONENTS = 2;
function extractTokenPayload(request) {
    const header = request.header("Authorization");
    if (!header) {
        return null;
    }
    const chunks = header.split(" ");
    if (chunks.length !== PAYLOAD_COMPONENTS || chunks[0] !== "Bearer") {
        return null;
    }
    try {
        const env = process.env;
        return jwt.verify(chunks[1], `${env.JWT_SECRET}`, {
            algorithms: ["HS256"],
            issuer: "DEFAULT_ISSUER"
        });
    }
    catch (err) {
        return null;
    }
}
exports.extractTokenPayload = extractTokenPayload;
//# sourceMappingURL=security-utils.js.map