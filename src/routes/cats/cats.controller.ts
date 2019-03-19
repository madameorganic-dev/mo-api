import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';
import { Response } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const { name, age, breed } = createCatDto;
    const result = { name, age, breed };
    this.catsService.create(result);
  }

  @Get()
  findAll(): CreateCatDto[] {
    return this.catsService.findAll();
  }

  @Get()
  findByLibrary(@Res() res: Response): any {
    res.status(HttpStatus.OK).json({ // Dead simple way to send back data
      error: false,
    });
  }

  @Get('test')
  findWildCards(): string {
    return 'This action returns all wildcards';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
