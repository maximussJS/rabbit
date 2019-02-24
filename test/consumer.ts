import {expect} from 'chai'
import {load} from 'dotenv'
import axios from 'axios'


load()

describe('CONSUMER', () => {
    describe('GET /', () => {
        it('Should return Array of Messages', () => {
            axios.get(process.env.CONSUMER_TEST_URL)
                 .then(res => {
                     expect(typeof res.data).to.equal('object')
                     expect(res.data[0].text).to.equal('hi rabbit')
                 })
                 .catch(err => console.error('TEST CONSUMER GET ERROR', err))
        })
    })
})
