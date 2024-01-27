import { PaletteMode } from "@mui/material";

export interface GlobalState {
    isDirty: boolean;
    theme: PaletteMode;
}

export const GlobalInitialState: GlobalState = {
    isDirty: false,
    theme: 'dark'
}
