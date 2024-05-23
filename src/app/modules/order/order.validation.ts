import { z } from 'zod'

const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  productId: z.string().min(1, 'Product ID Required'),
  price: z.number().min(0, 'Invalid Price'),
  quantity: z.number().min(0, 'Quantity must be minimum one'),
})

export default orderValidationSchema;