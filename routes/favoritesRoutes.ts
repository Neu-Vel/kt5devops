import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { handler } from "../utils/httpHandler";
import { addToFavorites, removeFromFavorites, getFavorites } from "../services/favoritesService";

export const favoritesRoutes = Router();

favoritesRoutes.use(authMiddleware);

/**
 * @openapi
 * /favorites:
 *  get:
 *      summary: Получить избранное текущего пользователя
 *      tags:
 *          - Favorites
 *      responses:
 *          200:
 *              description: Массив объектов { userId, productIds }
 */
favoritesRoutes.get(
  "/",
  (req, res) => handler(res, getFavorites((req as any).user.id))
);

/**
 * @openapi
 * /favorites:
 *  post:
 *      summary: Добавить товар в избранное
 *      tags:
 *          - Favorites
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
 *              description: Товар успешно добавлен в избранное
 */
favoritesRoutes.post(
  "/",
  (req, res) =>
    handler(
      res,
      addToFavorites((req as any).user.id, req.body.productId)
    )
);

/**
 * @openapi
 * /favorites/{productId}:
 *  delete:
 *      summary: Убрать товар из избранного
 *      tags:
 *          - Favorites
 *      parameters:
 *          - in: path
 *            name: productId
 *            required: true
 *            schema:
 *              type: integer
 *              example: 1
 *      responses:
 *          200:
 *              description: Товар успешно удалён из избранного
 */
favoritesRoutes.delete(
  "/:productId",
  (req, res) =>
    handler(
      res,
      removeFromFavorites((req as any).user.id, Number(req.params.productId))
    )
);