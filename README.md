# TechStore - Modern Ecommerce Application

A full-stack ecommerce web application built with React and Node.js, featuring a modern UI similar to Apple Store and Amazon. This project demonstrates frontend-backend communication using JSON file storage instead of a database, making it ideal for DevOps training and educational purposes.

## Tech Stack

### Frontend
- React 18 with Vite
- React Router for navigation
- Axios for API calls
- Modern responsive CSS (no Tailwind)
- Lucide React for icons

### Backend
- Node.js with Express
- JSON file storage (no database)
- RESTful API architecture
- CORS enabled for cross-origin requests

## Project Structure

```
ecommerce-app/
├── backend/
│   ├── controllers/
│   │   ├── cartController.js
│   │   └── productController.js
│   ├── routes/
│   │   ├── cartRoutes.js
│   │   └── productRoutes.js
│   ├── data/
│   │   ├── products.json
│   │   └── cart.json
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Categories.jsx
│   │   │   └── HeroBanner.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Cart.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── package.json
└── README.md
```

## API Endpoints

The backend runs on **http://localhost:5000** and provides the following endpoints:

- `GET /api/products` - Get all products
- `GET /api/categories` - Get all product categories
- `GET /api/cart` - Get cart items
- `GET /api/cart/total` - Get cart total amount
- `POST /api/cart/add` - Add product to cart (body: `{ productId: number }`)
- `POST /api/cart/remove` - Remove product from cart (body: `{ productId: number }`)

## Features

### Homepage
- Sticky navigation bar with cart total
- Hero banner with promotional heading and CTA button
- Shop by Category section with clickable category cards
- Best Seller Products grid
- Latest Products grid
- Footer section

### Products Page
- Category filter buttons (All, Audio, Wearables, Accessories)
- Responsive product grid
- Add to cart functionality with instant feedback

### Cart Page
- List of selected products with images
- Remove product button
- Dynamic cart subtotal
- Real-time total updates

### Product Cards
- Product image
- Product title
- Category badge
- Price display
- Add to Cart button with hover animation

## Backend Logging

The backend prints detailed logs to the terminal for all API interactions:

- `Products requested` - When products are fetched
- `Categories requested` - When categories are fetched
- `Cart requested` - When cart is viewed
- `Cart total requested` - When cart total is calculated
- `Product added: <product name>` - When a product is added to cart
- `Product removed: <product name>` - When a product is removed from cart
- `Updated total: $<amount>` - After every cart modification

## Installation & Setup

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 3. Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm start
```

The backend will start on **http://localhost:5000**

### 4. Start the Frontend Development Server

Open a new terminal and run:

```bash
cd frontend
npm run dev
```

The frontend will start on **http://localhost:5173** (or another port if 5173 is busy)

## Usage

1. Start both backend and frontend servers as described above
2. Open your browser and navigate to the frontend URL
3. Browse products, filter by category, add items to cart
4. View cart and see real-time total updates
5. Check backend terminal for API interaction logs

## Data Storage

### Products Data (`backend/data/products.json`)

Contains 12 sample products across 3 categories:
- Audio (headphones, speakers, earbuds)
- Wearables (smartwatches, fitness trackers)
- Accessories (keyboards, mice, laptop stands, USB hubs)

Each product includes:
- ID, name, category, price
- Image URL (from Pexels)
- Description
- Best seller flag
- Latest product flag

### Cart Data (`backend/data/cart.json`)

Stores cart items with:
- Product details (id, name, price, image, category)
- Quantity for each item

Cart data persists between page refreshes and is shared across all browser sessions.

## Design Features

- Modern ecommerce aesthetic inspired by Apple Store and Amazon
- Rounded cards with soft shadows
- Smooth hover animations and transitions
- Consistent spacing and layout
- Responsive grid layouts
- Sticky navigation bar
- Hero banner with gradient background
- Category cards with overlay effects
- Professional color scheme (no purple/indigo)

## Development Notes

- Frontend communicates with backend exclusively through Axios API calls
- Backend reads from and writes to JSON files for all data operations
- All API requests use the base URL: `http://localhost:5000/api`
- Cart total updates automatically every second via polling
- No database required - all data stored in JSON files

## Educational Purpose

This application is designed for DevOps training to demonstrate:
- Clear separation between frontend and backend
- RESTful API design and implementation
- File-based data storage
- API request/response cycle
- Terminal logging for debugging and monitoring
- Modern frontend development practices

## License

MIT
