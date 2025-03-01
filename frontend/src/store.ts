import { GetDefaultMiddleware } from './../node_modules/@reduxjs/toolkit/src/getDefaultMiddleware';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store