import * as express from 'express'
import * as morgan from 'morgan'
import {load} from 'dotenv'


load()

const consumer = express()

consumer.on('close', () => 'Producer stopped')

consumer.use(morgan('dev'))


export default consumer
