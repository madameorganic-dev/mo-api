import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { callMe } from "../Middleware/slackapp.bot";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  public catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception ? exception.getStatus() : 500;
    callMe({
      error: true,
      message: exception.message.message,
      path: request.url,
      status
    });
    response.status(status).json(
      {
        error: true,
        message: exception.message.message,
        path: request.url,
        stack: exception,
        statusCode: status,
        timestamp: new Date().toISOString()
      });
  }
}
