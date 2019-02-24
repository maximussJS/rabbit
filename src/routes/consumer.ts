import {Router, Response, Request} from 'express'
import pool from '../database'
import {getAllMessages} from '../utils/queries'
import {serverError, fail} from '../utils/responses'


export default Router()
    .get('/', async (req: Request, res: Response): Promise<Response> => {
        try {
            const {rows} = await pool.query(getAllMessages())
            if(!rows) return res.status(400).json(fail('No messages'))
            return res.status(200).json(rows)
        }
        catch (e) {
            console.error('Costumer GET Error',e)
            return res.status(500).json(serverError())
        }
    })
