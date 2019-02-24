import {query, queryAll} from '../types'


export const insertMessage: query = msg => `INSERT INTO messages (text) VALUES ('${msg}');`

export const getAllMessages: queryAll = () => 'SELECT * FROM messages;'
