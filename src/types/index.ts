import {Request, Response} from 'express'


interface response {
    status: boolean,
    message: string
}

export type jsonResponse = (msg: string) => response

export type serverError = () => response

export type query = (msg: string) => string

export type queryAll = () => string

export type Router = (req: Request, res: Response) => Promise<Response>
