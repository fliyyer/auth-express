import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";

export const registerUser = asyncHandler(async (req, res) => {
  const isFirstUser = (await User.countDocuments()) === 0 ? 'admin' : 'user'
  const user = await User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    role: isFirstUser
  })

  res.status(201).json({
    message: "Berhasil Register",
    user
  })
})