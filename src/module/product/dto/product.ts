import { IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class Product {
  @IsString()
  @ApiModelProperty()
  public name: string;

  @IsString()
  @ApiModelProperty()
  public productId: string;

  @IsString()
  @ApiModelProperty()
  public description: string;
}