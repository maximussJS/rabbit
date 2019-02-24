import {connect} from 'amqplib'


export const initSender = async () => {
    const conn = await connect(process.env.RABBITMQ_URL)
    const channel = await conn.createChannel()
    await channel.assertExchange(process.env.EXCHANGE_NAME, process.env.EXCHAGE_TYPE, {
        durable: false
    })
    return msg => channel.publish(process.env.EXCHANGE_NAME, process.env.QUEUE_KEY, new Buffer(msg))
}
