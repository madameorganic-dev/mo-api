import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";

@Module({
          controllers: [AuthController],
          imports: [
            PassportModule.register({ defaultStrategy: "jwt" }),
            JwtModule.register(
              {
                secretOrPrivateKey: "madameOrganic",
                signOptions: {
                  expiresIn: 3600
                }
              })
          ],
          providers: [AuthService, JwtStrategy]
        })
export class AuthModule {
}
