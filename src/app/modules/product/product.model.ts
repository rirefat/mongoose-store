import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";


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
        required: [true, "Required Product Price"]
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
        type: [
            {
                type: {
                    type: String,
                    required: [true, 'Variant is required']
                },
                value: {
                    type: Number,
                    required: [true, 'Variant value is required']
                }
            }
        ]
    },
    inventory: {
        type: {
            quantity: {
                type: Number,
                required: [true, "Quantity is required"]
            },
            inStock: {
                type: Boolean,
                required: [true, "Required inStock information"]
            }
        }
    }
});

const Product = model<TProduct>('Product', productSchema);