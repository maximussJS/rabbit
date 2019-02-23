import {Router, Response, Request} from 'express'
import {listenMessages} from '../rabbit/consumer'
import {serverError, success, fail} from '../utils/responses'


export default Router()
    .get('/', async (req: Request, res: Response): Promise<Response> => {
        try {
            return res.status(200).json(success('ok'))
        }
        catch (e) {
            console.error('Costumer GET Error',e)
            return res.status(500).json(serverError())
        }
    })
