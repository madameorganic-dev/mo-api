import { IsString, IsBoolean, IsOptional } from "class-validator";
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

  @IsString()
  @ApiModelProperty()
  public createdBy: string;

  @IsOptional()
  @IsBoolean()
  @ApiModelProperty()
  public isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiModelProperty()
  public isDeleted: boolean;

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  public masterProductId: string;

  @IsString()
  @ApiModelProperty()
  public productType: string;

  @IsString()
  @ApiModelProperty()
  public type: string;

  @IsString()
  @ApiModelProperty()
  public useTime: string;

}