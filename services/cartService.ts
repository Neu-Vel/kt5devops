import * as TE from "fp-ts/TaskEither"
import { db } from "../infrastructure/db"

export const addProduct = (userId:number, productId: number) =>
    TE.right (()=>{
            const cart = db.carts.find(item => item.userId === userId)
            const cartIndex = db.carts.findIndex(item => item.userId === userId)
            if(cart) {
                cart.productIds.push(productId)
                db.carts = db.carts.splice(cartIndex, 1, cart)
            }
            else {
                db.carts.push({userId, productIds: [productId]})
            }
        }
    )

export const getCart = (userId: number)=>
    TE.right(
        db.carts.filter(cart => cart.userId === userId)
    )