import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: [],
};

export const laykSlice = createSlice({
  name: "wishlist",
  initialState: initialStateValues,
  reducers: {
    addProductToLike: (state, action) => {
      

      const id = action.payload.id;
      if (!state.data.find((item) => item.id === id)) {
        state.data.push(action.payload);
      }
    },

    deleteUserOfferLinkDataLike: (state, actions) => {
      state.data = state.data.filter(
        (pradakt) => pradakt.id !== actions.payload
      );
    },

    productlikedLike: (state, action) => {
      state.data = state.data.filter((pradakt) => pradakt.id == action.payload);
    },
  },
});

export const { addProductToLike, deleteUserOfferLinkDataLike, productlikedLike } =
  laykSlice.actions;

export default laykSlice.reducer;
