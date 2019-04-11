import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes } from "@nestjs/common";
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
const bcrypt = require("bcryptjs");

import { BaseController } from "../Model/controller";
import { Service } from "./users.service";

@Controller("users")
export class CustomController extends BaseController {
    constructor(private readonly postsService: Service) {
        super(postsService);
    }

    @Post()
    public async create(@Body() values: any, many: boolean = false): Promise<any> {
        const { email, password } = values;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        values.password = hashedPassword;
        return super.create(values, many);
    }
}
