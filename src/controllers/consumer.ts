import pool from '../database'
import {Router} from '../types'
import {getAllMessages} from '../utils/queries'
import {fail, serverError} from '../utils/responses'


export const consumerGet: Router = async (req, res) => {
    try {
        const {rows} = await pool.query(getAllMessages())
        if(!rows) return res.status(400).json(fail('No messages'))
        return res.status(200).json(rows)
    }
    catch (e) {
        console.error('Costumer GET Error',e)
        return res.status(500).json(serverError())
    }
}
