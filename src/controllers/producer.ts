import {Router} from '../types'
import {initSender} from '../rabbit/producer'
import {fail, serverError, success} from '../utils/responses'


export const producerGet: Router = async (req, res) => {
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
}

export const producerPost = async (req, res) => {
    try {
        const {message} = req.body
        if(!message) return res.status(400).json(fail('No message'))
        const sendToQueue = await initSender()
        sendToQueue(message)
        return res.status(200).json(success('Sent'))
    }
    catch (e) {
        console.error('Producer POST Error',e)
        return res.status(500).json(serverError())
    }
}
