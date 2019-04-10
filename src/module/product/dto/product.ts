import { IsString, IsBoolean, IsOptional, IsIn, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class ProductVariant {
  @IsNumber()
  @ApiModelProperty()
  public weight: number;

  @IsNumber()
  @ApiModelProperty()
  public price: number;

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  public createdBy: string;

  @IsString()
  @ApiModelProperty()
  public masterProductId: string;

  @IsOptional()
  @IsString()
  @IsIn(["stockable", "master"])
  @ApiModelProperty()
  public productType: string;

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  public productId: string;
}

// tslint:disable:max-classes-per-file
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

  @IsOptional()
  @IsString()
  @IsIn(["stockable", "master"])
  @ApiModelProperty()
  public productType: string;

  @IsString()
  @ApiModelProperty()
  @IsIn(["Cream", "Serum", "Soap", "Mask"])
  public type: string;

  @IsString()
  @ApiModelProperty()
  @IsIn(["Day", "Night", "any"])
  public useTime: string;

}
