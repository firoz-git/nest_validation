import { Body, HttpStatus, Injectable, Param, Res } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UsersDto } from './dto/users.dto'
import { Users } from './interface/users.interface'

@Injectable()
export class UsersService {
  findByIdAndUpdate: any
  constructor(@InjectModel('Users') private usersModel: Model<Users>) {}

  async adduser(usersDto: UsersDto): Promise<void> {
    const { name, age, address, phone, email } = usersDto
    const users = new this.usersModel({ name, age, address, phone, email })
    try {
      await users.save()
    } catch (error) {
      console.log(error)
    }
  }

  //   async readAll(@Res() response) {
  //     const users = await this.usersModel.find()
  //     return response.status(HttpStatus.OK).json({
  //       users
  //     })
  //   }
  async update(usersDto: UsersDto) {
    console.log(usersDto)
    const user = await this.usersModel.findOneAndReplace()
  }

  // async findByIdAndRemove(@Res() response, @Param('id') id) {
  //   const studentDeleted = await this.usersModel.findByIdAndRemove(id)
  //   return response
  //     .status(HttpStatus.OK)
  //     .json({ studentDeleted: studentDeleted, msg: 'deleted succesfully' })
  // }
}
