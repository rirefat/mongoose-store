import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create new order
const createOrderIntoDB = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result;
}

export const orderServices ={
    createOrderIntoDB,
}