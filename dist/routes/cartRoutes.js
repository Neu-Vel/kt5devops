"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const httpHandler_1 = require("../utils/httpHandler");
const cartService_1 = require("../services/cartService");
exports.cartRoutes = (0, express_1.Router)();
exports.cartRoutes.use(auth_1.authMiddleware);
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
exports.cartRoutes.post("/", (req, res) => (0, httpHandler_1.handler)(res, (0, cartService_1.addProduct)(req.user.id, req.body.productId)));
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
exports.cartRoutes.get("/", (req, res) => (0, httpHandler_1.handler)(res, (0, cartService_1.getCart)(req.user.id)));
