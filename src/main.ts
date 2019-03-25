import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";
import { AllExceptionsFilter } from "./Middleware/errors.filter";
import * as compression from "compression";
import { createSwagger } from "./Middleware/swagger";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(
    AppModule
  );
  // Middleware

  app.use(compression());
  app.use(helmet());
  app.enableCors();
  app.use(
    rateLimit(
      {
        max: 100, // limit each IP to 100 requests per windowMs,
        windowMs: 15 * 60 * 1000 // 15 minutes
      })
  );

  createSwagger(app);
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(8887);
}

bootstrap().catch((err) => console.error(err));
