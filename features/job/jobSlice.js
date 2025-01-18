import { v4 as uuidv4 } from 'uuid';
import { addDataToLocalStorage, getDataFromLocalStorage } from "@/utils/localStorage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  jobs: typeof window !== 'undefined' ? getDataFromLocalStorage() || [] : [],
  position: '',
  company: '',
  location: '',
  status: ['pending', 'interview', 'declined'],
  selectedStatus: 'pending',
  mode: ['full-time', 'part-time', 'internship'],
  selectedMode: 'full-time',
  search: '',
  currentPage: 1,
  itemsPerPage: 10, // Number of items per page
};
  
  

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
      handleChange: (state, action) => {
        const { name, value } = action.payload;
        if (name === 'status') {
          state.selectedStatus = value;
        } else if (name === 'mode') {
          state.selectedMode = value;
        } else if (name === 'search') {
          state.search = value; // <-- Handle search input
        } else {
          state[name] = value;
        }
      },
            createJob: (state, { payload }) => {
            const { position, company, location, status, mode } = payload;
            const newJob = { id: uuidv4(),createdAt: new Date().toISOString(), position, company, location, status, mode };
            state.jobs = [...state.jobs, newJob];
            addDataToLocalStorage(state.jobs);
            toast.success('Job created');
            // Clear inputs
            state.position = '';
            state.company = '';
            state.location = '';
            state.selectedStatus = 'pending'; // Reset to default
            state.selectedMode = 'full-time'; // Reset to default
            },
            deleteJob: (state, { payload }) => {
              const { id } = payload;
              // Filter out the job with the given id
              const newJobs = state.jobs.filter((job) => job.id !== id);
              state.jobs = newJobs;
              // Update localStorage with the new state
              addDataToLocalStorage(newJobs);
              // Show success message
              toast.success('Item removed!');
            },
            updateJob: (state, { payload }) => {
              const { id, position, company, location, status, mode } = payload;
              const index = state.jobs.findIndex((job) => job.id === id);
              if (index !== -1) {
                state.jobs[index] = { ...state.jobs[index], position, company, location, status, mode };
                addDataToLocalStorage(state.jobs);
              }
      },
      changePage: (state, action) => {
        state.currentPage = action.payload;
      },
      },
})

export const { handleChange, createJob, deleteJob, updateJob, changePage } = jobSlice.actions;

export default jobSlice.reducer