import { Document } from 'mongoose'

export interface Users extends Document {
  readonly name: string
  readonly age: number
  readonly address: string
  readonly phone: number
  readonly email: string
}
