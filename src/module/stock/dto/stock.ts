import { IsString, IsBoolean, IsOptional, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class Stock {
  @IsOptional()
  @IsString()
  @ApiModelProperty()
  public serialnumber: string;

  @IsString()
  @ApiModelProperty()
  public productId: string;

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  public createdBy: string;

  @IsNumber()
  @ApiModelProperty()
  public stockQty: number;

  @IsNumber()
  @ApiModelProperty()
  public lotNo: number;

}