import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

//configureStore return all information of State
export const store = configureStore({
    reducer:{
        cartState : cartReducer,
    }
});

