import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slice";

export const store = configureStore({
    reducer: combineReducers({        
        global: globalReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;