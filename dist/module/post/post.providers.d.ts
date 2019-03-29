import { Connection } from "mongoose";
export declare const postsProviders: {
    inject: string[];
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").Document, {}>;
}[];
