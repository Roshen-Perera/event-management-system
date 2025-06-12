import {configureStore} from "@reduxjs/toolkit";
import EventSlice from "../slices/EventSlice";

export const store = configureStore({
    reducer: {
        event: EventSlice  
    }
});

export type AppDispatch = typeof store.dispatch;