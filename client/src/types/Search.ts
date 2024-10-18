import { Product } from "./Product"

export interface SearchState {
  searchResults: Product[]
  status: 'idle' | 'succeeded' | 'failed' | 'loading' 
  error: null | string
}