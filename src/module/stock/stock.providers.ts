import { Connection } from "mongoose";
import { StockSchema } from "./schema/stock.schema";
import { STOCK_MODEL_PROVIDER, DB_PROVIDER } from "../../constants";

export const Provider = [
  {
    inject: [DB_PROVIDER],
    provide: STOCK_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model("Stocks", StockSchema)
  }
];
