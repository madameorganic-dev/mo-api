import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes } from "@nestjs/common";
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { BaseController } from "../Model/controller";
import { Service } from "./users.service";

@Controller("users")
export class CustomController extends BaseController {
    constructor(private readonly postsService: Service) {
        super(postsService);
    }
}
