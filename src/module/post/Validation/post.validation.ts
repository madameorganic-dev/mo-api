import * as Joi from "joi";
import { JoiValidationPipe } from "../../../Validation/validation.pipe";

// tslint:disable:max-classes-per-file
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

// tslint:disable:max-classes-per-file
export class PostDeleteValidation extends JoiValidationPipe {
  public buildSchema(): object {
    return Joi.object(
      {
        id: Joi.string().required()
      });
  }
}
