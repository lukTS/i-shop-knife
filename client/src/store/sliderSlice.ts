import { createSlice } from "@reduxjs/toolkit"
import { SliderState } from '../types/Slider'

const initialState: SliderState = {
    slides: ['./images/slide0.jpg', './images/slide1.jpg', './images/slide2.jpg', './images/slide3.jpg'],
    slideNumber: 0
}

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        moveSlideLeft(state) {
            state.slideNumber = (state.slideNumber + 1) % state.slides.length;
        },
        moveSlideRight(state) {
            state.slideNumber = (state.slideNumber - 1 + state.slides.length) % state.slides.length;
        }
    }
});

export const { moveSlideLeft, moveSlideRight } = sliderSlice.actions
export default sliderSlice.reducer
