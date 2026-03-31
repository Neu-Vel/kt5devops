import { Router } from "express";
import { handler } from "../utils/httpHandler";
import { login, register } from "../services/authService";

export const authRouter = Router()

/**
 * @openapi
 * /auth/register:
 *  post:
 *      summary: Регистрация пользователя
 *      tags:
 *          - Auth
 *      requestBody:
 *            required: true
 *            content:
 *              application/json:
 *                  scheme:
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
 *      responces:
 *          200:
 *              description: Пользователь создан
 */
authRouter.post(
    "/register",
    (req, res) => handler(res, register(req.body.username, req.body.password))
)

authRouter.post(
    "/login",
    (req, res) => handler(res, login(req.body.username, req.body.password))
)