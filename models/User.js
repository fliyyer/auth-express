import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
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

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User" , userSchema)

export default User;