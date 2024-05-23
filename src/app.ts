import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { productRoutes } from './app/modules/product/product.route';
import { orderRouters } from './app/modules/order/order.router';
const app:Application = express();

//parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRouters);

app.get('/', (req:Request, res:Response) => {
  res.send('Welcome to Mongoose Store!')
})

export default app;