import { IsString, IsOptional, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class StockQuery {
  @IsOptional()
  @ApiModelProperty()
  public page: number | string;
}
