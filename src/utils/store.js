import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

//add reducers in store
const Store = configureStore({
    reducer: {
      app: appSlice,  //added appslice into my store
      search: searchSlice,
      chat: chatSlice,
    },
});


export default Store;