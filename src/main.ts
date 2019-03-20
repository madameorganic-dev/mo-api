import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";
import { HttpExceptionFilter } from "./Middleware/errors.filter";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {});
  // Middleware
  app.use(helmet());
  app.enableCors();
  app.use(
    rateLimit(
      {
        max: 100, // limit each IP to 100 requests per windowMs,
        windowMs: 15 * 60 * 1000 // 15 minutes
      })
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(8887);
}

bootstrap();
