import { Cart } from "../domain/cart";
import { Product } from "../domain/product";
import { User } from "../domain/user";

export const db = {
    users: [] as User[],
    carts: [] as Cart[],
    products: [
        {id: 1, category:"Телефон", title:"Iphone 17 pro chery tiga pro", price: 99999},
        {id: 2, category:"Телефон", title:"Sasunge", price: 10000},    
    ] as Product[]
}