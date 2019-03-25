import { Module } from "@nestjs/common";
import { PostModule } from "./module/post/post.module";
import { ArticleModule } from "./module/article/article.module";

@Module({
          imports: [PostModule, ArticleModule]
        })
export class AppModule {
}
