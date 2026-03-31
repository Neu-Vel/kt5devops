"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const httpHandler_1 = require("../utils/httpHandler");
const favoritesService_1 = require("../services/favoritesService");
exports.favoritesRoutes = (0, express_1.Router)();
exports.favoritesRoutes.use(auth_1.authMiddleware);
/**
 * @openapi
 * /favorites:
 *  get:
 *      summary: получить избранное текущего пользователя
 *      tags:
 *          - Favorites
 *      responses:
 *          200:
 *              description: массив объектов { userId, productIds }
 */
exports.favoritesRoutes.get("/", (req, res) => (0, httpHandler_1.handler)(res, (0, favoritesService_1.getFavorites)(req.user.id)));
/**
 * @openapi
 * /favorites:
 *  post:
 *      summary: добавить товар в избранное
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
 *              description: товар успешно добавлен в избранное
 */
exports.favoritesRoutes.post("/", (req, res) => (0, httpHandler_1.handler)(res, (0, favoritesService_1.addToFavorites)(req.user.id, req.body.productId)));
/**
 * @openapi
 * /favorites/{productId}:
 *  delete:
 *      summary: убрать товар из избранного
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
 *              description: товар успешно удалён из избранного
 */
exports.favoritesRoutes.delete("/:productId", (req, res) => (0, httpHandler_1.handler)(res, (0, favoritesService_1.removeFromFavorites)(req.user.id, Number(req.params.productId))));
