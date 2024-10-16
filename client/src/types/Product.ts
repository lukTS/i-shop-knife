export interface Product {
  id: string
  name: string
  shortDescription?: string
  longDescription?: string
  price: number
  stock: number
  category_id: string
  Article: string
  image_url: string
  created_at: string
  updated_at: string
  features: Feature [] 
  isNew: boolean
}

export interface Feature {
  name: string
  value: string
}

export interface ProductsState {
  products: Product[]
  newProducts: Product[]
  status: 'idle' | 'succeeded' | 'failed' | 'loading' 
  statusNewProducts: 'idle' | 'succeeded' | 'failed' | 'loading' 
  error: null | string
  errorNewProducts: null | string
}

export interface ProductCardProps {
  product: Product
}