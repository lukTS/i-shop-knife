const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const app = express()
const PORT = 5000
require('dotenv').config({ path: '../.env' })

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const SECRET_KEY = process.env.SECRET_KEY // Secret key for signing tokens

// Use CORS to allow requests from the frontend
app.use(cors())

// So that the server can return JSON correctly
app.use(express.json())

// Path to db.json file
const dbFilePath = path.join(__dirname, 'db.json')

// Function for reading data from db.json
function readData() {
  const data = fs.readFileSync(dbFilePath, 'utf-8')
  return JSON.parse(data);
}

// Function for writing data to db.json
function writeData(data) {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf-8')
}

// Function to generate JWT
function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' })
}

// Middleware for token verification
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']
  if (!token) return res.status(401).json({ message: 'No token provided' })

  jwt.verify(token.split(' ')[1], SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' })
    req.user = user
    next()
  })
}

// Route to get categories
app.get('/categories', (req, res) => {
  try {
    const data = readData()
    res.status(200).json(data.categories)
  } catch (error) {
    console.error('Error reading categories:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Route to get all products or products by category and search
app.get('/products', (req, res) => {
  try {
    const { category_id, q, isNew } = req.query
    const data = readData()
    let products = data.products

    // Filter by newness
    if (isNew) {
      products = products.filter(product => product.isNew === true)
    }

    // Filter by category
    if (category_id) {
      products = products.filter(product => product.category_id === category_id)
    }

    // Search by keyword in title or description
    if (q) {
      const query = q.toLowerCase()
      products = products.filter(product => 
        (product.name && product.name.toLowerCase().includes(query)) || 
        (product.longDescription && product.longDescription.toLowerCase().includes(query))
      ) 
    } 

    res.status(200).json(products)
  } catch (error) {
    console.error('Error reading products:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Route to get one product by id
app.get('/products/:id', (req, res) => {
  try {
    const data = readData()
    const product = data.products.find((p) => p.id === req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    console.error('Error reading product:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
});

// Route to get users
app.get('/users', (req, res) => {
  try {
    const data = readData()
    res.status(200).json(data.users)
  } catch (error) {
    console.error('Error reading users:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Route for registering a new user with token generation
app.post('/users', async (req, res) => {
  try {
    const data = readData()
    const { email, password } = req.body

    // Check if there is a user with the same email
    const existingUser = data.users.find((user) => user.email === email)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      id: Date.now().toString(),
      ...req.body,
      password: hashedPassword
    };
    data.users.push(newUser)
    writeData(data)

    const token = generateToken(newUser)
    res.status(201).json({ user: newUser, token })
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
});

app.post('/auth/google', async (req, res) => {
  const { token } = req.body

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });

    const { name, email, picture } = ticket.getPayload()

    // Here you can either create a new user in the database or find an existing one.
    let user = data.users.find(user => user.email === email)
    if (!user) {
      user = {
        id: Date.now().toString(),
        name,
        email,
        picture,
        password: '',  // For Google users, a password is not required
      };
      data.users.push(user)
      writeData(data)
    }

    // Generate a token for the application
    const appToken = generateToken(user)
    res.status(201).json({ user, token: appToken })
  } catch (error) {
    console.error('Error verifying Google token:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Route to create a new order (requires token)
app.post('/orders', authenticateToken, (req, res) => {
  try {
    const data = readData()
    const newOrder = {
      id: Date.now().toString(),
      ...req.body,
      userId: req.user.id  // User login route
    }
    data.orders.push(newOrder)
    writeData(data)
    res.status(201).json(newOrder)
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// User login route
app.post('/login', async (req, res) => {
  try {
    const data = readData()
    const { email, password } = req.body

    // Find user by email
    const user = data.users.find((user) => user.email === email)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = generateToken(user)
    res.status(200).json({ user, token })
  } catch (error) {
    console.error('Error logging in:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

 