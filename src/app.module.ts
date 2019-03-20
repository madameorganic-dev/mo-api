import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostModule } from "./module/post/post.module";
import { ArticleModule } from "./module/article/article.module";

@Module({
          controllers: [AppController],
          imports: [PostModule, ArticleModule],
          providers: [AppService]
        })
export class AppModule {
}
