const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json())

// Mock data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    stock: 15,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Feature-rich smartwatch with health tracking",
    category: "Electronics",
    stock: 8,
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Automatic drip coffee maker with programmable timer",
    category: "Home",
    stock: 12,
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Comfortable running shoes with advanced cushioning",
    category: "Sports",
    stock: 20,
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Adjustable aluminum laptop stand for better ergonomics",
    category: "Electronics",
    stock: 25,
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Non-slip yoga mat with extra cushioning",
    category: "Sports",
    stock: 30,
  },
]

// Routes
app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    data: products,
  })
})

app.get("/api/products/:id", (req, res) => {
  const productId = Number.parseInt(req.params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    })
  }

  res.json({
    success: true,
    data: product,
  })
})

app.post("/api/cart/add", (req, res) => {
  const { productId, quantity = 1 } = req.body
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    })
  }

  if (product.stock < quantity) {
    return res.status(400).json({
      success: false,
      message: "Insufficient stock",
    })
  }

  res.json({
    success: true,
    message: "Product added to cart",
    data: {
      product,
      quantity,
    },
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
