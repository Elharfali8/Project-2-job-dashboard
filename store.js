import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./features/job/jobSlice";

export const store = configureStore({
    reducer: {
        job: jobSlice
    }
})