import {expect} from 'chai'
import {load} from 'dotenv'
import axios from 'axios'


load()

describe('Producer', () => {
    describe('GET /:name', () => {
        it('Should return { success : true, message: Sent }', () => {
            axios.get(process.env.PRODUCER_TEST_URL + Math.random().toString(36).substr(2))
                 .then(res => {
                     expect(typeof res).to.equal('object')
                     expect(res.data.status).to.equal(true)
                     expect(res.data.message).to.equal('Sent')
                 })
                 .catch(err => console.error('TEST PRODUCER GET ERROR : ', err))
        })
    })
    describe('POST /', () => {
        it('Should return { success : true, message: Sent }', () => {
            axios.post(process.env.PRODUCER_TEST_URL, {
                message : Math.random().toString(36).substr(2)
            })
            .then(res => {
                expect(typeof res).to.equal('object')
                expect(res.data.status).to.equal(true)
                expect(res.data.message).to.equal('Sent')
            })
            .catch(err => console.error('TEST PRODUCER POST ERROR : ', err))
        })
    })
})
