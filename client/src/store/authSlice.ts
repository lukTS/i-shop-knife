// src/store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, loginWithGoogle } from './authThunks'
import { AuthState } from '../types/Auth'

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  statusRegistration: 'idle',
  error: null,
  errorRegistration: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.token = null
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.statusRegistration = 'loading' //Updating the registration status
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.statusRegistration = 'succeeded' //Successful registration
        state.errorRegistration = null // Resetting the error
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.statusRegistration = 'failed' // Resetting the error
        state.errorRegistration = action.error.message || null
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.status = 'succeeded'
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.status = 'succeeded'
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
