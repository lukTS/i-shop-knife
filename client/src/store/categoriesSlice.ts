import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../axiosConfig"
import { CategoryState } from "../types/Category"

const fetchCategories  = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await axios.get('/categories') 
  return response.data
})

const initialState: CategoryState = {
  categories: [],
  status: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },

  extraReducers: (builder) =>{
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default categoriesSlice.reducer
export { fetchCategories }