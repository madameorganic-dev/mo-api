import { Connection } from "mongoose";

import { ProductSchema } from "./schema/product.schema";
import { PROJECT_MODEL_PROVIDER, DB_PROVIDER } from "../../constants";

export const Provider = [
  {
    inject: [DB_PROVIDER],
    provide: PROJECT_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model("Product", ProductSchema)
  }
];
