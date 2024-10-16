import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RegisterUserParams, LoginUserParams, LoginResponse } from '../types/Auth'

// Function for user registration
export const registerUser = createAsyncThunk<LoginResponse, RegisterUserParams>(
  'auth/registerUser',
  async ({ firstName, lastName, email, password, phone, address }) => {
    try {
      const response = await axios.post('http://localhost:5000/users', {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        status: 'user'
      })

      const { user, token } = response.data // It is assumed that the API returns an object with user and token
      return { user, token }
    } catch (error) {
      const message = axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Registration failed'
      throw new Error(message)
    }
  }
)

// Function for user authorization
export const loginUser = createAsyncThunk<LoginResponse, LoginUserParams>(
  'auth/loginUser',
  async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password })
      const { user, token } = response.data
      return { user, token } // Возвращаем объект с user и token
    } catch (error) {
      const message = axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Login failed'
      throw new Error(message)
    }
  }
)

// Функция для авторизации через Google
export const loginWithGoogle = createAsyncThunk<LoginResponse, any>(
  'auth/loginWithGoogle',
  async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/login/google', user);
      const { user: loggedInUser, token } = response.data;
      return { user: loggedInUser, token } // Возвращаем объект с user и token
    } catch (error) {
      const message = axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Google login failed'
      throw new Error(message)
    }
  }
)
