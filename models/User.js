import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from 'validator';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "username harus diisi"],
    minlength: [3, 'username minimal 3 karakter']
  },
  email: {
    type: String,
    required: [true, "email harus diisi"],
    validate: {
      validator: validator.isEmail,
      message: "Inputan Harus berformat email"
    },
    unique: true
  },
  password: {
    type: String,
    required: [true, "password harus diisi"],
    minlength: [6, "password minimal 6 karakter"]
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  emailVerifiedAt: {
    type: Date
  }
});

const User = mongoose.model("User" , userSchema)

export default User;