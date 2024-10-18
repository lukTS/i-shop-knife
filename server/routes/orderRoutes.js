import express from 'express'
const router = express.Router()
import Order from '../models/orderModel.js'
import authenticateToken from '../middleware/authMiddleware.js'

// Create new order (requires token)
router.post('/', authenticateToken, async (req, res) => {
  const { shippingAddress, totalPrice, goods } = req.body.order || {} // Getting data from a nested object

  const newOrder = new Order({
    userId: req.user.id,
    shippingAddress,
    totalPrice,
    goods
  })

  try {
    await newOrder.save()
    res.status(201).json(newOrder)
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router
