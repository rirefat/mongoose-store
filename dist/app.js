"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/product/product.route");
const order_router_1 = require("./app/modules/order/order.router");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', product_route_1.productRoutes);
app.use('/api/orders', order_router_1.orderRouters);
app.get('/', (req, res) => {
    res.send('Hello Mongoose Store!');
});
exports.default = app;
