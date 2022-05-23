import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  description: ''
}

export const blogSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    title: (state, action) => {
      state.title = action.payload
    },
    description: (state, action) => {
      state.description = action.payload
    }
  }
})

export const { title, description } = blogSlice.actions

export default blogSlice.reducer
