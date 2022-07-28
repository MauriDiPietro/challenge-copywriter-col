import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes/routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', apiRoutes)

const PORT = 8087

app.listen(PORT, () => console.log(`Server run on PORT ${PORT}`))

export default app
