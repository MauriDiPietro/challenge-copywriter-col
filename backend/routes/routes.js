import express from 'express'

import { invertString } from '../controllers/controllers.js'
const router = express.Router()

router.get('/iecho', invertString)

export default router
