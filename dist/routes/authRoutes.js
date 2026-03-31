"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const httpHandler_1 = require("../utils/httpHandler");
const authService_1 = require("../services/authService");
exports.authRouter = (0, express_1.Router)();
/**
 * @openapi
 * /user/register:
 *  post:
 *      summary: Регистрация пользователя
 *      tags:
 *          - Auth
 *      requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - username
 *                          - password
 *                      properties:
 *                          username:
 *                              type: string
 *                              example: user12345
 *                          password:
 *                              type: string
 *                              example: 123456
 *      responses:
 *          200:
 *              description: Пользователь успешно создан
 */
exports.authRouter.post("/register", (req, res) => (0, httpHandler_1.handler)(res, (0, authService_1.register)(req.body.username, req.body.password)));
/**
 * @openapi
 * /user/login:
 *  post:
 *      summary: Авторизация пользователя
 *      tags:
 *          - Auth
 *      requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - username
 *                          - password
 *                      properties:
 *                          username:
 *                              type: string
 *                              example: user12345
 *                          password:
 *                              type: string
 *                              example: 123456
 *      responses:
 *          200:
 *              description: Успешная авторизация (возвращает токен)
 */
exports.authRouter.post("/login", (req, res) => (0, httpHandler_1.handler)(res, (0, authService_1.login)(req.body.username, req.body.password)));
