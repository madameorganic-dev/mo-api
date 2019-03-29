export declare abstract class BaseController {
    private readonly controller;
    protected constructor(controller: any);
    create(values: any): any;
    list(query: any): Promise<any[]>;
    get(params: any): Promise<any>;
    update(params: any, values: any): Promise<any>;
    delete(params: any): Promise<any[]>;
}
