import { Request, Response } from "express";
import { productServices } from "./product.service";

// Create a new product
const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: productData } = req.body;
        const result = await productServices.createProductIntoDB(productData);

        // sending response
        res.status(200).json({
            success: true,
            message: "New Product is created",
            data: result
        });
    } catch (err) {
        console.log(err);
    }
};

// Retrieve a list of all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getAllProductsFromDB();

        // sending response
        res.status(200).json({
            success: true,
            message: "Retrieve a list of all products successfully",
            data: result
        });

    } catch (err) {
        console.log(err)
    }
}

// Retrieve a single product
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.getSingleProductFromDB(productId);

        // Error handling for not found products
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found!!"
            })
        }
        // sending response
        res.status(200).json({
            success: true,
            message: "Retrieve single product successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

export const productController = {
    createProduct,
    getAllProducts,
    getSingleProduct
}