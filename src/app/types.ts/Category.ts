export type Category = {
    _id: number,
    name: string,
    status?: number
}

export type CategoryCreate = {
    name?: string,
    status?: number
}