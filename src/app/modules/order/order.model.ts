import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
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
})

export const Order = model<TOrder>('Order', orderSchema);