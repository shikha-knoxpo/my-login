import {configureStore} from "@reduxjs/toolkit";
import  registerSlice  from "./reducer";

export default configureStore({
    reducer:{register:registerSlice}
})