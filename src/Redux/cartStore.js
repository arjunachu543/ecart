import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/productsSlice";
import wishlistSlice from "./Slices/wishlistSlice";
import cartSlice from "./Slices/cartSlice";


const cartStore = configureStore({
    reducer:{
        productReducer:productsSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }

})

export default cartStore