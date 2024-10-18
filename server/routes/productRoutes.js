import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

// Route to get all products or products by category and search
router.get('/', async (req, res) => {
  const { category_id, q, isNewProduct } = req.query
  try {
    let query = {}

    if (isNewProduct === 'true') {
      query.isNewProduct = true
    }

    if (category_id) {
      query.category_id = category_id
    }

    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { longDescription: { $regex: q, $options: 'i' } }
      ]
    }

    const products = await Product.find(query)
    res.status(200).json(products)
  } catch (error) {
    console.error('Error reading products:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Route to get one product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
  } catch (error) {
    console.error('Error reading product:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router
