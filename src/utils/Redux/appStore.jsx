import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore(
{
    // This reducer is represent the app Store & can contains multiple slices like cart, fares, token etc..
    reducer: 
    {
        cart: cartReducer,
    }
});
 
export default appStore;