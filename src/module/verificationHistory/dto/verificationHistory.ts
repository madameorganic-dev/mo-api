import { IsString, IsBoolean, IsOptional, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class VerificationHistory {
  @IsString()
  @ApiModelProperty()
  public serialNumber: string;

  @IsString()
  @ApiModelProperty()
  public verifiedBy: string;
}
