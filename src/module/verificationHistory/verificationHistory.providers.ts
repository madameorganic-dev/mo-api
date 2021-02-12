import { Connection } from "mongoose";
import { VerificationHistorySchema } from "./schema/verificationHistory.schema";
import { VERIFICATION_HISTORY_MODEL_PROVIDER, DB_PROVIDER } from "../../constants";

export const Provider = [
  {
    inject: [DB_PROVIDER],
    provide: VERIFICATION_HISTORY_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model("VerificationHistory", VerificationHistorySchema, "verificationHistories")
  }
];
