import * as Joi from "joi";
import { JoiValidationPipe } from "../../../Validation/validation.pipe";

export class ProductValidation extends JoiValidationPipe {

  public buildSchema(): object {

    return Joi.object(
      {
        description: Joi.string().required(),
        name: Joi.string().required().max(50),
        productId: Joi.string().required()
      });

  }
}

// tslint:disable-next-line
export class PostDeleteValidation extends JoiValidationPipe {

  public buildSchema(): object {

    return Joi.object(
      {
        id: Joi.string().required()
      });

  }
}
