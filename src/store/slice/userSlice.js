// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    oblast: '',
    phone: '',
    email: '',
    ishadress: '',
    message: '',
  },
  reducers: {
    setUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
