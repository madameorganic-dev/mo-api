import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsModule } from "./routes/cats/cats.module";

@Module({
          controllers: [AppController],
          imports: [MongooseModule.forRoot("mongodb://bchurunway:Node00bchurunway@128.199.64.153:27017/bchurunway"), CatsModule],
          providers: [AppService]
        })
export class AppModule {
}
