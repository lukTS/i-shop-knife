import { createSlice } from "@reduxjs/toolkit"
import { ModalWindowState } from "../types/ModalWindow"

const initialState: ModalWindowState = {
  isModalOpen: false
}

const modalWindowSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCloseModalWindow(state, action) {
      console.log(action.payload)
      state.isModalOpen = action.payload
    }
  }
})

export const { openCloseModalWindow } = modalWindowSlice.actions
export default modalWindowSlice.reducer
