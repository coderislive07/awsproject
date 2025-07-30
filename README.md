# Simple E-Commerce Project

A small-scale e-commerce application with separate client and server folders.

## Project Structure

\`\`\`
ecommerce-project/
├── client/          # Next.js frontend
├── server/          # Express.js backend
└── README.md
\`\`\`

## Features

- **Frontend (Client)**:
  - Modern React/Next.js application
  - Responsive design with Tailwind CSS
  - Product listing and cart functionality
  - Real-time cart updates

- **Backend (Server)**:
  - Express.js REST API
  - Product management endpoints
  - Cart functionality
  - CORS enabled for frontend communication

## Setup Instructions

### Server Setup

1. Navigate to the server directory:
   \`\`\`bash
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the server:
   \`\`\`bash
   npm run dev
   \`\`\`
   
   The server will run on `http://localhost:5000`

### Client Setup

1. Navigate to the client directory:
   \`\`\`bash
   cd client
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
   
   The client will run on `http://localhost:3000`

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/cart/add` - Add product to cart

## Usage

1. Start both server and client applications
2. Visit `http://localhost:3000` to view the e-commerce site
3. Browse products and add them to your cart
4. View cart contents and manage quantities

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Styling**: Tailwind CSS, shadcn/ui components
