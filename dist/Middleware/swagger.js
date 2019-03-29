"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
function createSwagger(app) {
    const SWAGGER_TITLE = "BCHU API";
    const SWAGGER_DESCRIPTION = "API used for Micro Services";
    const SWAGGER_PREFIX = "/api";
    const version = require("../../package.json").version || "";
    const options = new swagger_1.DocumentBuilder()
        .setTitle(SWAGGER_TITLE)
        .setDescription(SWAGGER_DESCRIPTION)
        .setVersion(version)
        .setSchemes("http")
        .addBearerAuth("Bearer", "header")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}
exports.createSwagger = createSwagger;
//# sourceMappingURL=swagger.js.map