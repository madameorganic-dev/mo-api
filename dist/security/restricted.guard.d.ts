import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class RestrictedGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
