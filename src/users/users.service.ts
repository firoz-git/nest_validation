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

  async getusers(): Promise<any> {
    const users = await this.usersModel.find()
    return users
    console.log(users)
  }
  async edit(id, usersDto: UsersDto): Promise<any> {
    // console.log(usersDto)
    const { name, age, address, phone, email } = usersDto
    const user = new this.usersModel({ name, age, address, phone, email })
    user._id = id
    console.log(user, id, user._id)
    await this.usersModel.findByIdAndUpdate(id, user, {
      new: true
    })
  }

  async delete(@Param('id') id) {
    const studentDeleted = await this.usersModel.findByIdAndRemove(id)
    return { studentDeleted: studentDeleted, msg: 'deleted succesfully' }
  }
}
