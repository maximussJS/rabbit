import {jsonResponse, serverError as serverErrorType} from '../types'


export const success: jsonResponse = message => ({
    status : true,
    message : message
})


export const fail: jsonResponse = message => ({
    status : false,
    message : message
})

export const serverError: serverErrorType = () => fail('Internal Server Error')
