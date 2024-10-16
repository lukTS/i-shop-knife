import { User } from "./User"

export interface AuthState {
  user: User | null
  token: string | null
  status: 'idle' | 'succeeded' | 'failed' | 'loading'
  statusRegistration: 'idle' | 'succeeded' | 'failed' | 'loading'
  error: string | null
  errorRegistration: string | null
}

export interface RegisterUserParams {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  address: string
}

export interface LoginUserParams {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}