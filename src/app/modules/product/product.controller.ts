import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./product.validation";

// Create a new product
const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: productData } = req.body;
        const parsedData = productValidationSchema.parse(productData)
        const result = await productServices.createProductIntoDB(parsedData);

        // sending response
        res.status(200).json({
            success: true,
            response: "New Product is created",
            data: result
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
};

// Retrieve a list of all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await productServices.getAllProductsFromDB(searchTerm);

        if (searchTerm) {
            if (result.length > 0) {
                res.status(200).json({
                    success: true,
                    response: "Retrieve your desire product successfully",
                    data: result
                });
            } else {
                res.status(500).json({
                    success: false,
                    response: "No product matched",
                    data: result
                });
            }
        } else {
            res.status(200).json({
                success: true,
                response: 'Products retrieved successfully!',
                data: result
            });
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
}

// Retrieve a single product
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.getSingleProductFromDB(productId);

        // Error handling for not found products
        if (!result) {
            res.status(500).json({
                success: false,
                response: "Product not found!!"
            })
        }
        // sending response
        res.status(200).json({
            success: true,
            response: "Retrieve single product successfully",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
}

// Update single product
const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { product: updatedProduct } = req.body;
        const result = await productServices.updateProductFromDB(productId, updatedProduct);

        // Error handling for not found product
        if (!result) {
            res.status(500).json({
                success: false,
                response: "Product not found"
            })
        }

        // Sending response
        res.status(200).json({
            success: true,
            response: "Successfully updated the product",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
}

// Delete product from db
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.deleteProductFromDB(productId);

        // Error handling 
        if (!result) {
            res.status(500).json({
                success: false,
                response: "Product not found"
            })
        }

        // sending response
        res.status(200).json({
            success: true,
            response: "Successfully deleted the product",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
}

export const productController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}