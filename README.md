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

### Server-side

1. Navigate to the server directory:
   ```bash
   cd server
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
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

1. Switch to MongoDB: Replace the current db.json database with MongoDB to provide a more scalable database solution.
2. Admin Panel: Implement an admin panel where authorized users (e.g., store owners) can add, update, and delete products, as well as manage orders. Only a few select users will have access to this panel.
3. Advanced Product Filters: Enhance the catalog with more advanced filtering options for easier product discovery.
4. Bonus and Discount System: Extend the bonus and discount pages with functionality to allow users to apply discounts or bonus points during checkout.

## Usage

1. Once both the client and server are running, you can access the application through your web browser at http://localhost:3000.
2. Explore the catalog of knives, register an account, and make purchases.
