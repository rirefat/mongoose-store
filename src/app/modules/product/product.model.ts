import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const variantSchema = new Schema<TVariant>(
    {
        type: {
            type: String,
            required: [true, 'Variant type is required']
        },
        value: {
            type: String,
            required: [true, 'Variant value is required']
        }
    }
);

const inventorySchema = new Schema<TInventory>(
    {
        quantity: {
            type: Number,
            required: [true, "Quantity is required"]
        },
        inStock: {
            type: Boolean,
            required: [true, "Required inStock information"]
        }
    }
)

const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [40, "Invalid Product Name"]
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    price: {
        type: Number,
        required: [true, "Required Product Price"],
        min: [0, 'Invalid product price'],
    },
    category: {
        type: String,
        required: [true, "Required Product Category"]
    },
    tags: {
        type: [String],
        required: [true, "Required Product Tags"]
    },
    variants: {
        type: [variantSchema],
        required: [true, 'Variant is required']
    },
    inventory: {
        type: inventorySchema,
        required: [true, 'Inventory information is required']
    }
});

export const Product = model<TProduct>('Product', productSchema);