import express from 'express'
import controller from '../controllers/FTX'

const router = express.Router()

router.get('/markets', controller.sampleHealthCheck)

export = router