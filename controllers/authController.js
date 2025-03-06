import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";

export const registerUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body)

  res.status(201).json({
    message: "Berhasil Register",
    user
  })
})