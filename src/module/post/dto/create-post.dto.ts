import { IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CreatePostDto {
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
