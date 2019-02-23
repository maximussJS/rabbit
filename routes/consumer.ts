import {Router} from 'express'


export default Router()
    .get('/', async (req,res) => {
        return res.status(200)
    })
