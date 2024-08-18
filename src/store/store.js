import { configureStore } from "@reduxjs/toolkit";
import productsWishlistDataSlice from "./slice/productsWishlistDataSlice";
import laykSlice from "./slice/laykSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    tanlanganMahsulotlar: productsWishlistDataSlice,
    likemaxsulotlar: laykSlice,
    userSlice: userSlice,

  },
});
