import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Login')
})

router.post('/register', async (req, res) => {
  try {
    await User.create(req.body)
  } catch (error) {
    res.status(422).json({
      status: "error",
      error
    })
  }
})

router.post('/logout', (req, res) => {
  res.send('Logout')
})

router.get('/getuser', (req, res) => {
  res.send('GetUser')
})

export default router;