// src/types/Cart.ts
import { Product } from "./Product"
import { User } from "./User"

export interface CartProduct {
  product: Product
  quantity: number
}

export interface CartProductProps {
  cartProduct: CartProduct
}

export interface CartState {
  cartProducts: CartProduct[]
  totalPrice: number
  totalQuantity: number
  oderStatus: 'idle' | 'succeeded' | 'failed' | 'loading' 
}

export interface OrderPayload {
  user: User
  cartProducts: CartProduct[]
  totalPrice: number
}

export interface AddToCartAction {
  type: 'cart/addToCart'
  payload: Product
}

export interface RemoveFromCartAction {
  type: 'cart/removeFromCart'
  payload: { id: string } // product identifier
}

export interface ClearProductFromCartAction {
  type: 'cart/clearProductFromCart'
  payload: { id: string } // product identifier
}
