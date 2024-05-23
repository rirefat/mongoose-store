import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

// Create new order
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const parsedData = orderValidationSchema.parse(orderData)
        const result = await orderServices.createOrderIntoDB(parsedData);

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

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
    try {

        const { email } = req.query;
        const result = await orderServices.getAllOrdersFromDB(email);
        let response;
        if (email) {
            if (result.length > 0) {
                response = "Retrieved your order successfully";
            } else {
                response = "No order found!!";
            }
        } else {
            response = "All orders are retrieved successfully";
        }

        res.status(200).json({
            success: true,
            message: response,
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

export const orderControllers = {
    createOrder,
    getAllOrders
}