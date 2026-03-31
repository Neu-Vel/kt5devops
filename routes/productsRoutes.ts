import { Router } from "express";
import { handler } from "../utils/httpHandler";
import { getAll, getById, searchProducts } from "../services/productService";

export const productsRoutes = Router();

/**
 * @openapi
 * /products:
 *  get:
 *      summary: Получить список всех товаров
 *      tags:
 *          - Products
 *      responses:
 *          200:
 *              description: Успешно возвращён список товаров
 */
productsRoutes.get(
    "/", 
    (_, res) => handler(res, getAll())
);

/**
 * @openapi
 * /products/{id}:
 *  get:
 *      summary: Получить товар по ID
 *      tags:
 *          - Products
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Товар найден
 *          400:
 *              description: Товар не найден
 */
productsRoutes.get(
    "/:id", 
    (req, res) => handler(res, getById(Number(req.params.id)))
);

/**
 * @openapi
 * /products/search:
 *  get:
 *      summary: Поиск товаров по названию или категории
 *      tags:
 *          - Products
 *      parameters:
 *          - in: query
 *            name: q
 *            required: false
 *            schema:
 *              type: string
 *              example: Iphone
 *      responses:
 *          200:
 *              description: Список найденных товаров
 */
productsRoutes.get(
    "/search", 
    (req, res) => handler(res, searchProducts(req.query.q as string ?? ""))
);