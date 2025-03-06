import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import AuthRoutes from './routes/authRoutes.js'
import { errorHandler, notFoundPath } from "./middleware/errorMiddleware.js"


const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/auth', AuthRoutes);

app.use(notFoundPath)
app.use(errorHandler)

try {
  await mongoose.connect(process.env.DATABASE);
  console.log('Database Connected')
} catch (error) {
  handleError(error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})