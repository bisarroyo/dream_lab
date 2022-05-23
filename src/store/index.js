import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import post from '@reducers/reducer'

export default configureStore({
  reducer: {
    post
  },
  middleware: [thunk]
})
