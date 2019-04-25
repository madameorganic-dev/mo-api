import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IJwtPayload } from "./interfaces/jwt-payload.interface";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {
  }

  public async createToken(): Promise<object> {
    const user: IJwtPayload = { email: "test@email.com" };
    const accessToken = this.jwtService.sign(user);
    return {
      accessToken,
      expiresIn: 3600
    };
  }

  public async validateUser(payload: IJwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
