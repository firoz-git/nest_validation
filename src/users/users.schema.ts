import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    // unique: true,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  }
})
