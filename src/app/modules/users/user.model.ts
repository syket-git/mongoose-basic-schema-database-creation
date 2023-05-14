import { Schema, model } from 'mongoose';
import IUser from './user.interface';

const userSchema = new Schema<IUser>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  roll: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
