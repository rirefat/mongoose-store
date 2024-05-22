export interface TProduct {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: {
        type: string;
        value: number;
    }[];
    inventory:{
        quantity: number;
        inStock: boolean;
    }
  }