import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { RegisterUserParams, LoginUserParams, LoginResponse } from '../types/Auth'

// Function for user registration
export const registerUser = createAsyncThunk<LoginResponse, RegisterUserParams>(
  'auth/registerUser',
  async ({ firstName, lastName, email, password, phone, address }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/users/register', {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        status: 'user'
      });

      const { user, token } = response.data
      return { user, token }; 
    } catch (error) {
      const message = axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Registration failed'
      return rejectWithValue(message)
    }
  }
)

// Function for user authorization
export const loginUser = createAsyncThunk<LoginResponse, LoginUserParams>(
  'auth/loginUser',
  async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:5000/users/login', { email, password })
      const { user, token } = response.data // Extract user and token from response
      return { user, token } // Return the user and token
    } catch (error) {
      // Handle errors from the server
      const message = axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Login failed'
      throw new Error(message) // Throw error to be caught in the component
    }
  }
);

// Function for Google authentication
export const loginWithGoogle = createAsyncThunk<LoginResponse, any>(
  'auth/loginWithGoogle',
  async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/login/google', user)
      const { user: loggedInUser, token } = response.data // Extract user and token
      return { user: loggedInUser, token } // Return the user and token
    } catch (error) {
      // Handle errors from the server
      const message = axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Google login failed'
      throw new Error(message) // Throw error to be caught in the component
    }
  }
)
