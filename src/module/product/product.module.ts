import { Module } from "@nestjs/common";
import { CustomController } from "./product.controller";
import { Service } from "./product.service";
import { Provider } from "./product.providers";
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
export class ProductModule {
}
