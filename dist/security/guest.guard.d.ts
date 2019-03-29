import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
export declare class GuestGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
