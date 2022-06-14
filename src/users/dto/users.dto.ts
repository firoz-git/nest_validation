import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator'

export class UsersDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string

  @IsNumber()
  age: number

  @IsString()
  @MaxLength(70)
  address: string

  @IsNumber()
  phone: number

  @IsString()
  email: string
}
