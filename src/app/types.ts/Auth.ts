export type User = {
    _id: number,
    username: string,
    email: string,
    password: string
}


export type TypeLoginRequest = {
    id: number,
    username: string,
    email: string,
    password: string
}

export type TypeLoginRegister = {
    username?: string,
    email: string,
    password: string
}


export type TypeLoginResponse = {
    accessToken: string,
    user: {
        id: number,
        email: string
    }
}