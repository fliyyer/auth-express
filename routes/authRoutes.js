import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Login')
})

router.post('/register', (req, res) => {
  res.send('Register')
})

router.post('/logout', (req, res) => {
  res.send('Logout')
})

router.get('/getuser', (req, res) => {
  res.send('GetUser')
})

export default router;