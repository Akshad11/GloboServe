import { createSlice } from "@reduxjs/toolkit";

interface LangState {
    lang: string;
}

const initialState: LangState = {
    lang: typeof window !== "undefined"
        ? localStorage.getItem("lang") || "en"
        : "en",
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;

            // 🔥 persist to localStorage
            if (typeof window !== "undefined") {
                localStorage.setItem("lang", action.payload);
            }
        },
    },
});

export const { setLang } = languageSlice.actions;
export default languageSlice.reducer;
