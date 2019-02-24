import {Router, Request, Response} from 'express'
import {initSender} from '../rabbit/producer'
import {success, fail, serverError} from '../utils/responses'



export default Router()
    .get('/:msg', async (req: Request, res: Response): Promise<Response> => {
        try {
            const msg = req.params.msg
            if(!msg) return res.status(400).json(fail('Message param is required'))
            const sendToQueue = await initSender()
            sendToQueue(msg)
            return res.status(200).json(success('Sent'))
        }
        catch (e) {
            console.error('Producer GET Error',e)
            return res.status(500).json(serverError())
        }
    })
    .post('/', async (req: Request, res: Response): Promise<Response> => {
        try {
            const {message} = req.body
            if(!message) return res.status(400).json(fail('No message'))
            const sendToQueue = await initSender()
            return res.status(200).json(success('Sent'))
        }
        catch (e) {
            console.error('Producer POST Error',e)
            return res.status(500).json(serverError())
        }
    })
