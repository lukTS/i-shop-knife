import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchResult } from "./searchThunck"
import { SearchState } from "../types/Search"

const initialState: SearchState = {
  searchResults: [],
  status: 'idle',
  error: null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSearchResult.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.searchResults = action.payload
      console.log(state.searchResults)
    })
    .addCase(fetchSearchResult.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message || null
    })
  }
})

export default searchSlice.reducer