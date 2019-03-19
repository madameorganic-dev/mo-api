import { Document } from 'mongoose';

export class CreateCatDto extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
