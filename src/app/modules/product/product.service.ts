import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a New Product
const createProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData)
    return result;
}

// Retrieve a List of All Products
const getAllProductsFromDB = async () => {
    const result = await Product.find();
    return result;
}

export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
}