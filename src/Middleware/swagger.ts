import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export function createSwagger(app: INestApplication): void {
  const SWAGGER_TITLE = "BCHU API";
  const SWAGGER_DESCRIPTION = "API used for Micro Services";
  const SWAGGER_PREFIX = "/api";
  const version = require("../../package.json").version || "";
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE)
    .setDescription(SWAGGER_DESCRIPTION)
    .setVersion(version)
    .setSchemes("https", "http")
    .addBearerAuth("Bearer", "header")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}
