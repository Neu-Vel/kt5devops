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
 *      summary: 'Получить список товаров'
 *      tags:
 *          - Products
 *      responces:
 *          200:
 *              description: List of products
 *          304:
 *              description: List of products
 */
exports.productsRoutes.get("/", (_, res) => (0, httpHandler_1.handler)(res, (0, productService_1.getAll)()));
/**
 * @openapi
 * /products/{id}:
 *  get:
 *      summary: 'Получить товар по Id'
 *      tags:
 *          - Products
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *      responces:
 *          200:
 *              description: List of products
 *          304:
 *              description: List of products
 */
exports.productsRoutes.get("/:id", (req, res) => (0, httpHandler_1.handler)(res, (0, productService_1.getById)(Number(req.params.id))));
