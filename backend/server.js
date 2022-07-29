import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes/routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  )
  next()
})

const whiteList = ['http://localhost:3000', 'https://quiet-marzipan-3814d0.netlify.app/']

app.use(cors({ origin: whiteList }))

app.use('/', apiRoutes)

app.listen(process.env.PORT || 8087, () => console.log(`Server run on PORT ${process.env.PORT}`))

export default app
