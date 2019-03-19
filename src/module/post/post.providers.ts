import { Connection } from "mongoose";

import { PostSchema } from "./schema/post.schema";
import { POST_MODEL_PROVIDER, DB_PROVIDER } from "../../constants";

export const postsProviders = [
  {
    inject: [DB_PROVIDER],
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model("Post", PostSchema)
  }
];
