import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import axiosInstance from '../axiosConfig'

// Request to get all products or products by category
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (categoryId: string | undefined | null = null, { rejectWithValue }) => {
  try {
    let response
    if (categoryId) {
      // Query products by category
      response = await axiosInstance.get(`/products?category_id=${categoryId}`)
    } else {
      // Query all products
      response = await axiosInstance.get('/products')
    }
    if (response.status !== 200) {
      throw new Error('Failed to fetch products')
    }
    return response.data
  } catch (error) {
    console.error("Fetch products error:", error) // Error logging
    const message = axios.isAxiosError(error) && error.message
    return message ? rejectWithValue(message) : rejectWithValue('Unknown error')
  }
})

// Request for new products
export const fetchNewProducts = createAsyncThunk('products/fetchNewProducts', async (_, { rejectWithValue }) => {   
  try {
    const response = await axiosInstance.get('/products?isNewProduct=true')  
    if (response.status !== 200) {
      throw new Error('Failed to fetch new products')
    }  
    return response.data
  } catch (error) {
    console.error("Fetch products error:", error) // Error logging
    const message = axios.isAxiosError(error) && error.message
    return message ? rejectWithValue(message) : rejectWithValue('Unknown error')
 }
})
