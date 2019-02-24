import {Router} from 'express'
import {producerGet, producerPost} from '../controllers/producer'


export default Router()
    .get('/:msg', producerGet)
    .post('/', producerPost)
