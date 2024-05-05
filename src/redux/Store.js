import { configureStore } from "@reduxjs/toolkit";
import { sinUpSlice } from "./Slices/Users/Singup";
export const store = configureStore({
    reducer: {
        signup: sinUpSlice.reducer
    }
})





