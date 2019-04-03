import { Connection } from "mongoose";

import { UserSchema } from "./schema/user.schema";
import { USER_MODEL_PROVIDER, DB_PROVIDER } from "../../constants";

export const Provider = [
  {
    inject: [DB_PROVIDER],
    provide: USER_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model("User", UserSchema)
  }
];
