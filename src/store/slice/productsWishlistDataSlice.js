import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: [],
};

export const productsWishlistDataSlice = createSlice({
  name: "wishlist",
  initialState: initialStateValues,
  reducers: {
    addProductToWishlist: (state, action) => {
      const id = action.payload.id;

      if (!state.data.find((item) => item.id === id)) {
        state.data.push(action.payload);
      }
    },
    deleteUserOfferLinkData: (state, actions) => {
      state.data = state.data.filter(
        (pradakt) => pradakt.id !== actions.payload
      );
    },
    productliked: (state, action) => {
      state.data = state.data.filter((pradakt) => pradakt.id == action.payload);
    },
  },
});

export const { addProductToWishlist, deleteUserOfferLinkData, productliked } =
  productsWishlistDataSlice.actions;

export default productsWishlistDataSlice.reducer;
