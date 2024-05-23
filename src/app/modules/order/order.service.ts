import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create new order
const createOrderIntoDB = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result;
}

// Retrieve All Orders
const getAllOrdersFromDB = async (email: any) => {
    let result;

    if (email) {
        result = await Order.find({ email })
    } else {
        result = await Order.find()
    }

    return result;
}

export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
}