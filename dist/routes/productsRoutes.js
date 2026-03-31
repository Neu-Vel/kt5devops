"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const httpHandler_1 = require("../utils/httpHandler");
const productService_1 = require("../services/productService");
exports.productsRoutes = (0, express_1.Router)();
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
exports.productsRoutes.get("/", (_, res) => (0, httpHandler_1.handler)(res, (0, productService_1.getAll)()));
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
exports.productsRoutes.get("/:id", (req, res) => (0, httpHandler_1.handler)(res, (0, productService_1.getById)(Number(req.params.id))));
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
exports.productsRoutes.get("/search", (req, res) => { var _a; return (0, httpHandler_1.handler)(res, (0, productService_1.searchProducts)((_a = req.query.q) !== null && _a !== void 0 ? _a : "")); });
