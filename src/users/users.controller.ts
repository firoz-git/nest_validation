import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ValidationPipe
} from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersDto } from './dto/users.dto'
import { Users } from './interface/users.interface'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/adduser')
  async adduser(@Body(ValidationPipe) usersDto: UsersDto): Promise<void> {
    return await this.usersService.adduser(usersDto)
  }
  //   @Get('/getusers')
  //   async readAll(): Promise<Users> {
  //     return await this.usersService.find().exec()
  //   }

  @Put('/:id')
  async update(@Body(ValidationPipe) usersDto: UsersDto): Promise<void> {
    return await this.usersService.update(usersDto)
  }

  //   @Delete('/:id')
  //   async findByIdAndRemove4(id): Promise<any> {
  //     return await this.usersService.findByIdAndRemove(id)
  //   }
}
