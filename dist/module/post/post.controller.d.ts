import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./post.service";
import { IPost as Interface } from "./interface/post.interface";
import { BaseController } from "../Model/controller";
export declare class PostsController extends BaseController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<Interface>;
    list(query: Interface): Promise<Interface[]>;
    delete(params: Interface): any;
}
