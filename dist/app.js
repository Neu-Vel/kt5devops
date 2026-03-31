"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const productsRoutes_1 = require("./routes/productsRoutes");
const authRoutes_1 = require("./routes/authRoutes");
const cartRoutes_1 = require("./routes/cartRoutes");
const favoritesRoutes_1 = require("./routes/favoritesRoutes");
const swagger_ui_express_1 = require("swagger-ui-express");
const swagger_1 = require("./swagger");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/products", productsRoutes_1.productsRoutes);
    app.use("/user", authRoutes_1.authRouter);
    app.use("/cart", cartRoutes_1.cartRoutes);
    app.use("/favorites", favoritesRoutes_1.favoritesRoutes);
    app.use("/swagger", swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swagger_1.swaggerSpec));
    return app;
};
exports.createApp = createApp;
