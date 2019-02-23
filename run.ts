import producer from './producer'
import consumer from './consumer'


producer.listen(parseInt(process.env.PRODUCER_PORT), () => console.log('Producer started on port :',process.env.PRODUCER_PORT))
consumer.listen(parseInt(process.env.CONSUMER_PORT), () => console.log('Consumer started on port :',process.env.CONSUMER_PORT))
