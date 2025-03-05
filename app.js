import express from "express"
const app = express()
const port = 3000
import AuthRoutes from './routes/authRoutes.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/auth', AuthRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})