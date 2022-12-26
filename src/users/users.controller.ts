import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/auth/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFilterDto } from './dto/user-filter.dto';
import { UsersService } from './users.service';

@Controller({
  path: 'users',
  version: '1',
})
@ApiBearerAuth()
@ApiTags('users')
export class UsersController {
  constructor(private readonly uService: UsersService) {}

  // @Get('/getUserById/:id')
  // async getById(@Param('id') id: string) {
  //   return this.uService.getById({ id });
  // }

  // @Get('/getAllUser')
  // async getAll() {
  //   return await this.uService.getAll();
  // }

  // @Public()
  // @Post('/Register')
  // @ApiCreatedResponse({
  //   description: 'User created successfully',
  //   status: HttpStatus.CREATED,
  // })
  // async create(@Body() data: CreateUserDto) {
  //   const user = await this.uService.getByEmail(data.emailAddress);
  //   if (user) {
  //     throw new BadRequestException('User Already Exists');
  //   } else {
  //     const createdAccount = await this.uService.create(data);
  //     return createdAccount;
  //   }
  // }
}
