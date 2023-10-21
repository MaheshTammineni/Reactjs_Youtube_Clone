import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

//add reducers in store
const Store = configureStore({
    reducer: {
      app: appSlice,  //added appslice into my store
    },
});


export default Store;