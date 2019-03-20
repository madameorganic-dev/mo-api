import { Module } from "@nestjs/common";
import { PostsController } from "./post.controller";
import { PostsService } from "./post.service";
import { postsProviders } from "./post.providers";
import { DatabaseModule } from "../../Database/database.module";

@Module(
  {
    controllers: [PostsController],
    imports: [DatabaseModule],
    providers: [
      PostsService,
      ...postsProviders
    ]
  })
export class PostModule {
}
