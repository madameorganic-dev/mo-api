import { Connection } from "mongoose";
export declare const articleProvider: {
    inject: string[];
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
}[];
