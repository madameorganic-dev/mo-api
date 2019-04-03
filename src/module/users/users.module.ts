import { Module } from "@nestjs/common";
import { CustomController } from "./users.controller";
import { Service } from "./users.service";
import { Provider } from "./users.providers";
import { DatabaseModule } from "../../Database/database.module";

@Module({
  controllers: [CustomController],
  imports: [DatabaseModule],
  providers: [Service, ...Provider]
})
export class UsersModule {}
