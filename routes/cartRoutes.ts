import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { handler } from "../utils/httpHandler";
import { addProduct, getCart } from "../services/cartService";

export const cartRoutes = Router();

cartRoutes.use(authMiddleware);

/**
 * @openapi
 * /cart:
 *  post:
 *      summary: Добавить товар в корзину
 *      tags:
 *          - Cart
 *      requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - productId
 *                      properties:
 *                          productId:
 *                              type: integer
 *                              example: 1
 *      responses:
 *          200:
 *              description: Товар добавлен в корзину
 */
cartRoutes.post(
  "/",
  (req, res) =>
    handler(
      res,
      addProduct((req as any).user.id, req.body.productId)
    )
);

/**
 * @openapi
 * /cart:
 *  get:
 *      summary: Получить корзину пользователя
 *      tags:
 *          - Cart
 *      responses:
 *          200:
 *              description: Корзина пользователя
 */
cartRoutes.get(
  "/",
  (req, res) =>
    handler(res, getCart((req as any).user.id))
);