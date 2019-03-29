import { Document } from "mongoose";
export interface IArticle extends Document {
    readonly articleNumber: number;
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}
