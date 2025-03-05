import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
const app = express()
const port = process.env.PORT
import AuthRoutes from './routes/authRoutes.js'


app.use('/api/v1/auth', AuthRoutes);

try {
  await mongoose.connect(process.env.DATABASE);
  console.log('Database Connected')
} catch (error) {
  handleError(error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})