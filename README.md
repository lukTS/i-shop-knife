# Knife Store

This is a knife store web application built using React and Redux with TypeScript. The project includes essential features like a shopping cart, registration, purchases, and a product catalog. The server-side is implemented using Node.js and Express, storing data in a `db.json` file.

## Features

- **Home Page**: Displays new products and options for searching and filtering by categories.
- **Product Catalog**: A comprehensive catalog of knives organized into categories.
- **Shopping Cart**: Allows users to add items to the cart and proceed to checkout.
- **Registration and Authentication**: Users can register and log in.
- **Order Processing**: Users can place and confirm orders.
- **Bonus Program Page**: Information about the bonus program available to customers.
- **Discount Page**: Details on available discounts for products.

## Versions of the Server

This project contains two versions of the server:

1. **File-based storage (Main)**: The main version of the server that stores data in a `db.json` file. This method is lightweight and simple, which makes it particularly convenient for initial development and testing phases. It allows rapid changes to the data structure and provides an easy-to-maintain solution without the overhead of managing a full database.
   
2. **MongoDB (Development)**: The MongoDB version of the server is a more scalable solution for production environments. This database allows for more efficient querying, better data management, and supports complex features like user roles, product filtering, and order management.

### Why keep the file-based server?

The file-based `db.json` server is kept for the following reasons:
- **Ease of development**: It allows quick setup without the need for additional database infrastructure.
- **Simple data management**: Useful for developers and testers who need an easily editable, local storage solution.
- **Rapid prototyping**: Ideal for trying out new features before committing to a more complex database system like MongoDB.

## Technologies

- **React**: For building the client-side application.
- **Redux**: For state management.
- **TypeScript**: For static type checking.
- **SCSS**: For styling the application.
- **Node.js**: For the server-side implementation.
- **Express**: For building the server with routing capabilities.
- **Axios**: For making HTTP requests.

## Installation and Running the Project

### Client-side

1. Navigate to the `client` directory:
   ```bash
   cd client
2. Install dependencies:
   ```bash
   npm install
3. Start the project:
   ```bash
   npm start

### Server-side (File-based storage)

1. Navigate to the server directory:
   ```bash
   cd server
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   node server.js

### Server-side (MongoDB)

1. Switch to the mongodb-server branch:
   ```bash
   git checkout mongodb-server
2. Install dependencies:
   ```bash
   npm install
3. Set up your MongoDB connection in the .env file.

4. Navigate to the server directory:
   ```bash
   cd server
5. Start the server:
   ```bash
   node server.js

The client will run on http://localhost:3000, and the server will run on http://localhost:5000.

## Project Structure

   ```bash
   i-store/
   ├── client/
   │   ├── public/
   │   ├── src/
   │   │   ├── components/
   │   │   │   ├── Header/
   │   │   │   │   ├── index.tsx
   │   │   │   │   └── Header.module.scss
   │   │   │   ├── Cart/
   │   │   │   │   ├── index.tsx
   │   │   │   │   └── Cart.module.scss
   │   │   │   ├── Product/
   │   │   │   │   ├── index.tsx
   │   │   │   │   └── Product.module.scss
   │   │   │   └── ...                 # Other components
   │   │   ├── pages/
   │   │   │   ├── Home/
   │   │   │   │   ├── index.tsx
   │   │   │   │   └── Home.module.scss
   │   │   │   ├── Catalog/
   │   │   │   │   ├── index.tsx
   │   │   │   │   └── Catalog.module.scss
   │   │   │   └── ...                 # Other pages
   │   │   ├── store/
   │   │   │   ├── cartSlice.ts         # Cart logic (slice & thunks)
   │   │   │   ├── cartThunks.ts        # Thunks for cart
   │   │   │   ├── authSlice.ts         # Authentication logic (slice & thunks)
   │   │   │   ├── authThunks.ts        # Thunks for authentication
   │   │   │   └── ...                  # Other slices and thunks
   │   │   ├── styles/
   │   │   │   ├── _global.scss         # Global styles
   │   │   │   ├── _mixins.scss         # SCSS mixins
   │   │   │   ├── _variables.scss      # SCSS variables
   │   │   ├── data/
   │   │   │   ├── breadcrumbConfig.ts  # Breadcrumb configuration
   │   │   │   ├── menuItems.ts         # Menu items configuration
   │   │   │   └── routesConfig.ts      # Routes configuration
   │   │   ├── tsconfig.json
   │   └── package.json
   ├── server/
   │   ├── db.json                      # JSON database file
   │   ├── server.js                    # Node.js server with Express
   │   └── package.json
   └── README.md
```

## Future Improvements

This project is still under development and will be expanded with new features. Below are some planned improvements:

1. Admin Panel: Implement an admin panel where authorized users (e.g., store owners) can:

- Add, update, and delete products.
- Manage orders and customer information.
- Track inventory and sales statistics.
This feature will allow easier site management and streamline product updates.

2. Payment Integration: Connect payment systems (such as Stripe or PayPal) to handle transactions securely. Customers will be able to pay for their orders directly through the website during checkout.

3. Advanced Product Filters: Enhance the catalog with more advanced filtering options for easier product discovery. This will include filtering by price range, material, or purpose (e.g., camping, hunting, etc.).

4. Bonus and Discount System: Extend the bonus and discount pages with functionality to allow users to apply discounts or bonus points during checkout.

## Usage

1. Once both the client and server are running, you can access the application through your web browser at http://localhost:3000.
2. Explore the catalog of knives, register an account, and make purchases.
