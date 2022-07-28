import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes/routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', apiRoutes)

app.listen(process.env.PORT, () => console.log(`Server run on PORT ${process.env.PORT}`))

export default app
