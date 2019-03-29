"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const errors_filter_1 = require("./Middleware/errors.filter");
const compression = require("compression");
const swagger_1 = require("./Middleware/swagger");
const common_1 = require("@nestjs/common");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.use(compression());
        app.use(helmet());
        app.enableCors();
        app.use(rateLimit({
            max: 100,
            windowMs: 15 * 60 * 1000
        }));
        swagger_1.createSwagger(app);
        app.useGlobalFilters(new errors_filter_1.AllExceptionsFilter());
        yield app.listen(7777);
    });
}
bootstrap().catch((err) => console.error(err));
//# sourceMappingURL=main.js.map