import { Module } from "@nestjs/common";
import { CustomController } from "./stock.controller";
import { Service } from "./stock.service";
import { Provider } from "./stock.providers";
import { DatabaseModule } from "../../Database/database.module";

@Module(
  {
    controllers: [CustomController],
    imports: [DatabaseModule],
    providers: [
      Service,
      ...Provider
    ]
  })
export class StockModule {
}
