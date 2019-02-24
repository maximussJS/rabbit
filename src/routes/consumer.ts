import {Router} from 'express'
import {consumerGet} from '../controllers/consumer'


export default Router()
    .get('/', consumerGet)
