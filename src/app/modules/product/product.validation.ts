import { z } from "zod";

const variantValidation = z.object({
    type: z.string().min(1, "Type is required"),
    value: z.string().min(1, "Value is required")
});

const inventoryValidation = z.object({
    quantity: z.number().min(0, "Invalid quantity"),
    inStock: z.boolean()
});

const productValidationSchema = z.object({
    name: z.string().min(3, "Product name is required").max(40, "Invalid product name"),
    description: z.string().min(10, "Product description is required"),
    price: z.number().min(0, "Invalid product price"),
    category: z.string().min(1, "Product category is required"),
    tags: z.array(z.string().min(1, 'Invalid product tag')).nonempty('Minimum one tag is required'),
    variants: z.array(variantValidation).nonempty("Minimum one variant is required"),
    inventory: inventoryValidation,
});

export default productValidationSchema;