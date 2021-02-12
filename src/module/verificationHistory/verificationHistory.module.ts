import { Module } from "@nestjs/common";
import { CustomController } from "./verificationHistory.controller";
import { DatabaseModule } from "../../Database/database.module";
import { Service } from "./verificationHistory.service";
import { Provider } from "./verificationHistory.providers";

@Module({
          controllers: [CustomController],
          imports: [DatabaseModule],
          providers: [
            Service,
            ...Provider
          ]
        })
export class VerificationHistoryModule {}
