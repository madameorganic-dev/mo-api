import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
export declare abstract class JoiValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): typeof value;
    abstract buildSchema(): object;
}
