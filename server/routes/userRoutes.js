import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

const router = express.Router()
const SECRET_KEY = process.env.SECRET_KEY
if (!SECRET_KEY) {
  console.error('SECRET_KEY is not defined')
}
// User registration
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, phone, address } = req.body 

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const newUser = new User({ 
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      status: 'user'
    });
    await newUser.save()

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, SECRET_KEY, { expiresIn: '1h' })
    res.status(201).json({ user: newUser, token })
  } catch (error) {
    console.error('Error registering user:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' })
    res.status(200).json({ user, token })
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router
