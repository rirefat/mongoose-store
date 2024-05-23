"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
// Create new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: orderData } = req.body;
        const parsedData = order_validation_1.default.parse(orderData);
        const result = yield order_service_1.orderServices.createOrderIntoDB(parsedData);
        // sending response
        res.status(200).json({
            success: true,
            response: "New order is created",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield order_service_1.orderServices.getAllOrdersFromDB(email);
        let response;
        if (email) {
            if (result.length > 0) {
                response = "Retrieved your order successfully";
            }
            else {
                response = "No order found!!";
            }
        }
        else {
            response = "All orders are retrieved successfully";
        }
        res.status(200).json({
            success: true,
            message: response,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrders
};
