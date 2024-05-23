"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
// Create a New Product
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(productData);
    return result;
});
// Retrieve a List of All Products
const getAllProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (searchTerm) {
        const searchOptions = { $regex: searchTerm, $options: 'i' };
        result = yield product_model_1.Product.find({
            $or: [
                { name: searchOptions },
                { description: searchOptions },
            ]
        });
    }
    else {
        result = yield product_model_1.Product.find();
    }
    return result;
});
// Retrieve single product
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id: id });
    return result;
});
// Update a single product
const updateProductFromDB = (id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOneAndUpdate({ _id: id }, updatedProduct, { new: true, runValidators: true });
    return result;
});
// Delete product form db
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.deleteOne({ _id: id });
    return result;
});
exports.productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB
};
