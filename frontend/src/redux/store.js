import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice.js";
import messageReducer from "./messageSlic.js";

const store = configureStore({
    reducer:{
        user:userReducers,
        message:messageReducer,
    }
})


export default store;