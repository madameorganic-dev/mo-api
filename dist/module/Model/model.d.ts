export interface IBaseModelParamsInterface {
    options?: any;
    [propName: string]: any;
}
export interface IBaseModelCtxInterface {
    page?: number;
    perPage?: number;
    sortBy?: string;
    sortType?: number;
    [propName: string]: any;
}
export declare abstract class BaseModel {
    private readonly model;
    private readonly type;
    private readonly logger;
    protected constructor(data: any, type: any);
    create(values: any): Promise<any>;
    get(id: string): Promise<any>;
    list(params?: IBaseModelParamsInterface, ctx?: IBaseModelCtxInterface): any;
    update(id: string, values: any): Promise<void>;
    delete(id: string): Promise<void>;
}
