import express from 'express'
const router = express.Router()
import Category from '../models/categoryModel.js'

// Route to get categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error reading categories:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router
