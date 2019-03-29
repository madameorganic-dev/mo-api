"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const token_1 = require("../token");
const security_utils_1 = require("./security-utils");
let RestrictedGuard = class RestrictedGuard {
    canActivate(context) {
        const payload = security_utils_1.extractTokenPayload(context.switchToHttp().getRequest());
        if (!payload) {
            return false;
        }
        return (payload.role === token_1.Role.RESTRICTED);
    }
};
RestrictedGuard = __decorate([
    common_1.Injectable()
], RestrictedGuard);
exports.RestrictedGuard = RestrictedGuard;
//# sourceMappingURL=restricted.guard.js.map