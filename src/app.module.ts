import { Module } from "@nestjs/common";
import { PostModule } from "./module/post/post.module";
import { ArticleModule } from "./module/article/article.module";
import { ProductModule } from "./module/product/product.module";
import { StockModule } from "./module/stock/stock.module";
import { UsersModule } from "./module/users/users.module";
import { AuthModule } from "./auth/auth.module";

@Module(
  {
    imports: [AuthModule, PostModule, ArticleModule, ProductModule, StockModule, UsersModule]
  })
export class AppModule {
}
