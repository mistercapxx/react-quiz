import { configureStore } from "@reduxjs/toolkit";
import viktorinaReducer from './viktorinaSlice';

const store = configureStore({
    reducer: {
        viktorina:viktorinaReducer,
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;