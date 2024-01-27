import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalInitialState } from "./GlobalState";

export const globalSlice = createSlice({
    name: "global",

    initialState: GlobalInitialState,

    reducers: {

        setIsDirty: (state, action: PayloadAction<boolean>) => {
            state.isDirty = action.payload
        },

    }

})

export const {
    setIsDirty
} = globalSlice.actions

export default globalSlice.reducer