export default interface ProductList {
    id: string
    name: string
    listOfProducts: Product[]
}

export interface Product {
    quantity: number
    name: string
    price: number
    isPurchased: boolean
}
