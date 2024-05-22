import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const result = await productServices.createProductIntoDB(product);

        // sending response
        res.send(200).json({
            success: true,
            message: "New Product is created",
            data: result
        });
    } catch (err) {
        console.log(err);
    }
};

export const productController = {
    createProduct,
}