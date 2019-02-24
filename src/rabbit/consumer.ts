import {connect} from 'amqplib'
import pool from '../database'
import {insertMessage} from '../utils/queries'


export const listenMessages = async () => {
    const conn = await connect(process.env.RABBITMQ_URL)
    const channel = await conn.createChannel()
    await channel.assertExchange(process.env.EXCHANGE_NAME, process.env.EXCHANGE_TYPE,{
        durable: false
    })
    const q = await channel.assertQueue(process.env.QUEUE_NAME, {
        exclusive: true
    })
    await channel.bindQueue(q.queue, process.env.EXCHANGE_NAME, process.env.QUEUE_KEY)
    return channel.consume(q.queue, async msg => await pool.query(insertMessage(msg.content.toString())), {
        noAck : false
    })
}
