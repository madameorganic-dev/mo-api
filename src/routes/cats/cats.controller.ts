import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { CreateCatDto } from "./dto/cats.dto";
import { Response } from "express"; // tslint:disable-line
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Post()
  public async create(@Body() createCatDto: CreateCatDto) { // tslint:disable-line
    const { name, age, breed } = createCatDto;
    const result = { name, age, breed };
    this.catsService.create(result);
  }

  @Get()
  public findAll(): CreateCatDto[] {
    // @ts-ignore
    return this.catsService.findAll();
  }

  @Get()
  public findByLibrary(@Res() res: Response): any {
    res.status(HttpStatus.OK).json({ // Dead simple way to send back data
                                     error: false
                                   });
  }

  @Get("test")
  public findWildCards(): string {
    return "This action returns all wildcards";
  }

  @Get(":id")
  public findOne(@Param("id") id: string): string {
    return `This action returns a #${id} cat`;
  }
}
