import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a New Product
const createProductIntoDB = async (productData: TProduct) => {
    const result = await Product.create(productData)
    return result;
}

// Retrieve a List of All Products
const getAllProductsFromDB = async (searchTerm: any) => {
    let result;

    if (searchTerm) {
        const searchOptions = { $regex: searchTerm, $options: 'i' };
        result = await Product.find({
            $or: [
                { name: searchOptions },
                { description: searchOptions },
            ]
        })
    } else {
        result = await Product.find();
    }
    return result;
}

// Retrieve single product
const getSingleProductFromDB = async (id: string) => {
    const result = await Product.findOne({ _id: id });
    return result;
}

// Update a single product
const updateProductFromDB = async (id: string, updatedProduct: object) => {
    const result = await Product.findOneAndUpdate({ _id: id }, updatedProduct, { new: true, runValidators: true });
    return result;
}

// Delete product form db
const deleteProductFromDB = async (id: string) => {
    const result = await Product.deleteOne({ _id: id });
    return result;
}

export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB
}