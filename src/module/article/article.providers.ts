import { Connection } from "mongoose";

import { ArticleSchema } from "./schema/article.schema";
import { POST_MODEL_PROVIDER, DB_PROVIDER } from "../../constants";

export const articleProvider = [
  {
    inject: [DB_PROVIDER],
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model("Article", ArticleSchema)
  }
];
