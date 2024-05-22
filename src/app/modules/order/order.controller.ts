import { Request, Response } from "express";
import { orderServices } from "./order.service";

// Create new order
const createOrder = async (req: Request, res: Response) => {
    try {
        const { order: orderData } = req.body;
        const result = await orderServices.createOrderIntoDB(orderData);

        // sending response
        res.status(200).json({
            success: true,
            response: "New order is created",
            data: result
        });
    } catch (err) {
        console.log(err)
    }
}

export const orderControllers = {
    createOrder,
}