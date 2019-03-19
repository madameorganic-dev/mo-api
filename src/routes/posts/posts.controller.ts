import { Controller, Get } from "@nestjs/common";

@Controller("posts")
export class PostsController {
  @Get()
  public getPosts(): object {
    return {
      data: "From Posts"
    };
  }
}
