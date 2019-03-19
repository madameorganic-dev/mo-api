import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";

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
  await app.listen(8887);
}

bootstrap();
