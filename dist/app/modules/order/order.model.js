"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "User email is required"]
    },
    productId: {
        type: String,
        required: [true, "Product id is required"]
    },
    price: {
        type: Number,
        required: [true, "Invalid price amount"],
        min: [0, "Invalid price amount"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity info is required"],
        min: [1, "Quantity can not be negative"]
    }
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
