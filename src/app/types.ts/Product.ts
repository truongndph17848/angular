export type Product = {
    _id: number,
    name: string,
    price: number,
    sale_price: number,
    description: string,
    image_url: string,
    status: number,
    category_id: string,
}




export type ProductCreate = {
    name?: string,
    status?: number
}

export type ProductCart = {
    _id: number,
    name: string,
    price: number,
    sale_price: number,
    description: string,
    image_url: string,
    status: number,
    category_id: string,
    value: number
}