import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create new order
const createOrderIntoDB = async (orderData: TOrder) => {
    const product = await Product.findOne({ _id: orderData.productId });

    if (!product) {
        throw new Error("Product not found");        
    }
    if (orderData.quantity > product.inventory.quantity) {
        throw new Error("Low Stock");
    }
    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

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