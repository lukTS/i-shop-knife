export interface Category {
  _id: string
  name: string
  icon: string
  img1: string
  img2: string
}

export interface CategoryState {
  categories: Category[]
  status:  'idle' | 'succeeded' | 'failed' | 'loading'
  error: string | null
}


export interface CardCatalogMenuProps {
  category: Category 
}