import { Connection } from "mongoose";
export declare const Provider: {
    inject: string[];
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
}[];
