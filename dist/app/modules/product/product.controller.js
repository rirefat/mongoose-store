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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// Create a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const parsedData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.productServices.createProductIntoDB(parsedData);
        // sending response
        res.status(200).json({
            success: true,
            response: "New Product is created",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
});
// Retrieve a list of all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.productServices.getAllProductsFromDB(searchTerm);
        if (searchTerm) {
            if (result.length > 0) {
                res.status(200).json({
                    success: true,
                    response: "Retrieve your desire product successfully",
                    data: result
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    response: "No product matched",
                    data: result
                });
            }
        }
        else {
            res.status(200).json({
                success: true,
                response: 'Products retrieved successfully!',
                data: result
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
});
// Retrieve a single product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getSingleProductFromDB(productId);
        // Error handling for not found products
        if (!result) {
            res.status(500).json({
                success: false,
                response: "Product not found!!"
            });
        }
        // sending response
        res.status(200).json({
            success: true,
            response: "Retrieve single product successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
});
// Update single product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { product: updatedProduct } = req.body;
        const result = yield product_service_1.productServices.updateProductFromDB(productId, updatedProduct);
        // Error handling for not found product
        if (!result) {
            res.status(500).json({
                success: false,
                response: "Product not found"
            });
        }
        // Sending response
        res.status(200).json({
            success: true,
            response: "Successfully updated the product",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
});
// Delete product from db
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteProductFromDB(productId);
        // Error handling 
        if (!result) {
            res.status(500).json({
                success: false,
                response: "Product not found"
            });
        }
        // sending response
        res.status(200).json({
            success: true,
            response: "Successfully deleted the product",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            response: "Something went wrong",
            error: err
        });
    }
});
exports.productController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
