# Mongoose Store
Mongoose Store is a Node.js application built with Express.js that provides a simple store management system. This project uses MongoDB for database operations and Mongoose as the ODM (Object Data Modeling) library to interact with MongoDB. The application is written in TypeScript and allows users to manage products, and orders.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Product Management: Add, update, delete, and view products.
- Order Management: Create and manage orders.
- RESTful API for all CRUD operations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine (v14.x or later).
- MongoDB installed and running on your local machine or a cloud instance.
- npm (Node Package Manager) installed.
- TypeScript installed globally:  `npm install -g typescript `

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rirefat/mongoose-store.git
   cd mongoose-store
   ```
2. Install the dependencies:
    ```
    npm install
    ```

## Running the Application
1. Set up the environment variables: Create a .env file in the root directory and add the following variables:

    ```
    PORT=5000
    DATABASE_URL="mongodb-connection-url"
    ```
    Adjust the MONGODB_URI if your MongoDB instance is running on a different host or port.

3. Build the application:

    ```
    npm run build
    ```

3. Run the server:

    ```
    npm run start    
    ```
    The application should now be running on http://localhost:5000.

## Usage
After starting the application, you can use tools like Postman or cURL to interact with the API endpoints.

### Example Request
- Get all products:`http://localhost:5000/api/products`


## API Endpoints
### Products
- GET `/api/products` - Retrieve all products.
- GET `/api/products/:productId` - Retrieve a single product by ID.
- POST `/api/products` - Create a new product.
- PUT `/api/products/:productId` - Update a product by ID.
- DELETE `/api/products/:productId` - Delete a product by ID.

### Orders
- GET `/api/orders` - Retrieve all orders.
- GET `/api/orders?email=email@gmail.com` - Retrieve a single order by email.
- POST `/api/orders` - Create a new order.

## Live Server
You can access the live server at ` https://mongoose-store-backend.vercel.app `