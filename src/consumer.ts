import * as express from 'express'
import * as morgan from 'morgan'
import router from './routes/consumer'
import {load} from 'dotenv'
import {listenMessages} from './rabbit/consumer'


load()

const consumer = express()

consumer.on('close', () => 'Producer stopped')

consumer.use(morgan('dev'))

listenMessages()
    .then(() => console.log('RabbitMQ started listen'))
    .catch(err => console.error('RabbitMQ listen Error : ',err))


consumer.use('/', router)


export default consumer
