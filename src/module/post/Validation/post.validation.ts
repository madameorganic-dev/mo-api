import * as Joi from "joi";
import { JoiValidationPipe } from "../../../Validation/validation.pipe";

export class PostValidation extends JoiValidationPipe {

  public buildSchema(): object {

    return Joi.object(
      {
        content: Joi.string().required().max(50),
        title: Joi.string().required(),
        userId: Joi.string().required()
      });

  }
}

export class PostDeleteValidation extends JoiValidationPipe {

  public buildSchema(): object {

    return Joi.object(
      {
        id: Joi.string().required()
      });

  }
}
