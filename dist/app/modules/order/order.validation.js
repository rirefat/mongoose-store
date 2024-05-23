"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    productId: zod_1.z.string().min(1, 'Product ID Required'),
    price: zod_1.z.number().min(0, 'Invalid Price'),
    quantity: zod_1.z.number().min(0, 'Quantity must be minimum one'),
});
exports.default = orderValidationSchema;
