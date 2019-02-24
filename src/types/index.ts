interface Response {
    status: boolean,
    message: string
}

export type jsonResponse = (msg: string) => Response

export type serverError = () => Response

export type query = (msg: string) => string

export type queryAll = () => string
