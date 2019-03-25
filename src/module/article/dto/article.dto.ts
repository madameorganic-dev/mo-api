import { IsString, IsInt } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class ArticleDto {
  @IsInt()
  @ApiModelProperty()
  public articleNumber: number;

  @IsString()
  @ApiModelProperty()
  public title: string;

  @IsString()
  @ApiModelProperty()
  public content: string;

  @IsString()
  @ApiModelProperty()
  public userId: string;
}
