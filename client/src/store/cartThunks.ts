import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../axiosConfig"
import { OrderPayload } from '../types/Cart'
import { RootState } from './index'

export const sendingOrder = createAsyncThunk(
  'cart/sendingOrder',
  async ({ user, cartProducts, totalPrice }: OrderPayload, { getState, rejectWithValue }) => {
      const goods = cartProducts.map((item) => ({product_id: item.product.id, product_price: item.product.price, quantity: item.quantity}))
      const order = {
        shippingAddress: user.address,
        totalPrice: totalPrice,
        status: 'pending', // Order status (pending, shipped, delivered, canceled)
        createdAt: new Date(),
        updatedAt: new Date(),
        goods
      }

      const state = getState() as RootState;
      const token = state.auth.token

    try {
      // Отправка POST-запроса на сервер с данными заказа
      const response = await axios.post('http://localhost:5000/orders', {
        order
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data
    } catch (error) {
      return rejectWithValue('Order sending failed')
    }
  }
)

