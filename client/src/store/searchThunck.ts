import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import axiosInstance from '../axiosConfig'

export const fetchSearchResult = createAsyncThunk(
  'search/fetchSearchResult', 
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/products?q=${query}`)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Unknown error occurred')
    }
  }
)
