import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe
} from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersDto } from './dto/users.dto'
import { Users } from './interface/users.interface'
import { response } from 'express'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/adduser')
  async adduser(@Body(ValidationPipe) newUser: UsersDto): Promise<void> {
    return await this.usersService.adduser(newUser)
  }
  @Get('/getusers')
  async getusers(): Promise<void> {
    return await this.usersService.getusers()
  }

  @Put('/:id')
  async edit(
    @Param('id') id,
    @Body(ValidationPipe) usersDto: UsersDto
  ): Promise<void> {
    return await this.usersService.edit(id, usersDto)
  }

  @Delete('/delete/:id')
  async delete(id): Promise<any> {
    return await this.usersService.delete(id)
  }
}
