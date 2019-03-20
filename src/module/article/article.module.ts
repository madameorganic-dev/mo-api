import { Module } from "@nestjs/common";
import { CustomController } from "./article.controller";
import { Service } from "./article.service";
import { DatabaseModule } from "../../Database/database.module";
import { articleProvider } from "./article.providers";

@Module(
  {
    controllers: [CustomController],
    imports: [DatabaseModule],
    providers: [Service, ...articleProvider]
  })
export class ArticleModule {
}
