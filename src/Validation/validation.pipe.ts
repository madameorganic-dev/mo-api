import * as Joi from "joi";
import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export abstract class JoiValidationPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata): typeof value {
    const result = Joi.validate(value, this.buildSchema());

    if (result.error !== null) {
      throw new HttpException(
        {
          detail: result.error.message.replace(/"/g, `'`),
          message: "Validation failed",
          statusCode: HttpStatus.BAD_REQUEST
        },
        HttpStatus.BAD_REQUEST);
    }

    return result.value;
  }

  public abstract buildSchema(): object;

}
