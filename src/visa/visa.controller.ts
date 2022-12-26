import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
  Param,
  Delete,
} from '@nestjs/common';
import { VisaService } from './visa.service';
import { CreateVisaDto } from './dto/create-visa.dto';
import { UpdateVisaDto } from './dto/update-visa.dto';
import { Public } from 'src/auth/constants';
@ApiTags('Visa')
@Controller('visa')
export class VisaController {
  constructor(private readonly visaService: VisaService) {}

  // @Public()
  // @Post()
  // async create(@Body() createVisaDto: CreateVisaDto) {
  // return await this.visaService.create(createVisaDto);
  // }

  // @Public()
  // @Get()
  // async findAll() {
  // return await this.visaService.findAll();
  // }
  @Public()
  @Get('/TestVisa')
  async findOne() {
    return await this.visaService.test();
  }

  @Public()
  @Get('/TestRefer')
  async findReferer(@Request() req) {
    const referer = req.headers.referer;
    console.log(referer);
    // if(referer==="http://localhost:3000/"){
    return referer;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVisaDto: UpdateVisaDto) {
  // return this.visaService.update(+id, updateVisaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  // return this.visaService.remove(+id);
  // }
}
