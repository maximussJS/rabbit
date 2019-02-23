import * as express from 'express'
import * as morgan from 'morgan'
import {load} from 'dotenv'
import {json,urlencoded} from 'body-parser'


load()

const producer = express()

producer.on('close', () => 'Producer stopped')

producer.use(morgan('dev'))
producer.use(json())
producer.use(urlencoded({
    extended: true
}))


export default producer
