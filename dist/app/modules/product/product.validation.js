"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantValidation = zod_1.z.object({
    type: zod_1.z.string().min(1, "Type is required"),
    value: zod_1.z.string().min(1, "Value is required")
});
const inventoryValidation = zod_1.z.object({
    quantity: zod_1.z.number().min(0, "Invalid quantity"),
    inStock: zod_1.z.boolean()
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Product name is required").max(40, "Invalid product name"),
    description: zod_1.z.string().min(10, "Product description is required"),
    price: zod_1.z.number().min(0, "Invalid product price"),
    category: zod_1.z.string().min(1, "Product category is required"),
    tags: zod_1.z.array(zod_1.z.string().min(1, 'Invalid product tag')).nonempty('Minimum one tag is required'),
    variants: zod_1.z.array(variantValidation).nonempty("Minimum one variant is required"),
    inventory: inventoryValidation,
});
exports.default = productValidationSchema;
