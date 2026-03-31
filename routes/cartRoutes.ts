import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { handler } from "../utils/httpHandler";
import { addProduct, getCart } from "../services/cartService";

export const cartRoutes = Router()

cartRoutes.use(authMiddleware)

cartRoutes.post(
    "/",
    (req, res) => 
        handler(
            res, 
            addProduct(
                (req as any).user.id,
                req.body.productId
            )
        ) 
)

cartRoutes.get(
    "/",
    (req, res) => 
        handler (
            res, 
            getCart((req as any).user.id)
        ) 
)