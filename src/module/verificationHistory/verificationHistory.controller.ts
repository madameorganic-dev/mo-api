import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes } from "@nestjs/common";
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { Service } from "./verificationHistory.service";
import { BaseController } from "../Model/controller";
import {
  IVerificationHistoryResponse,
  IVerificationHistoryErrorResponse
} from "./interface/verificationHistory.interface";
// import { VerificationHistory } from "./dto/verificationHistory";

@ApiUseTags("Verification-History")
@Controller("verify")
@ApiBearerAuth()
export class CustomController extends BaseController {
  constructor(private readonly verificationHistoryService: Service) {
    super(verificationHistoryService);
  }

  // There should be no post request for this
  // @Post()
  // @ApiOperation({ title: "Create History For Verification" })
  // @ApiResponse(
  //   {
  //     description: "The record has been successfully created.",
  //     status: 201
  //   })
  // @ApiResponse({ status: 403, description: "Forbidden." })
  // public create(@Body() create: VerificationHistory): any {
  //   const { serialNumber, verifiedBy, createdBy = "Test-User" } = create;
  //
  //   return super.create(create);
  // }

  @Get(":id")
  public greet(@Param("id") id: string): any  {
    return {
      data: "Hello World from /verify/:id",
      id
    };
  }

  @Post(":id")
  @ApiOperation({ title: "Verify And Create History" })
  public async verify(
    @Param("id") id: string,
    @Body("verifiedBy") verifiedBy: string
  ): Promise<IVerificationHistoryResponse | IVerificationHistoryErrorResponse> {
    return this.verificationHistoryService.verify(id, verifiedBy);
  }
}
