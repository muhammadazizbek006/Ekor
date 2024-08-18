import { configureStore } from "@reduxjs/toolkit";
import productsWishlistDataSlice from "./slice/productsWishlistDataSlice";

import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    tanlanganMahsulotlar: productsWishlistDataSlice,

    userSlice: userSlice,

  },
});
