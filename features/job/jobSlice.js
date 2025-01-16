import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    jobs: [],
    position: '',
    company: '',
    city: '',
    status: ['pending', 'interview', 'declined'],
    mode: ['full-time', 'part-time', 'internship']
}

const jobSlice = createSlice({
    name: 'job',
    initialState
})

export default jobSlice.reducer