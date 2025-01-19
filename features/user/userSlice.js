import { v4 as uuidv4 } from 'uuid';

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    addUserToLocalStorage,
    getUsersFromLocalStorage,
    removeUsersFromLocalStorage,
} from "@/utils/localStorage";

const initialState = {
    name: '',
    email: '',
    password: '',
    users: getUsersFromLocalStorage(), // Initialize users from localStorage
    isLoggedIn: false,
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleUserChange: (state, { payload }) => {
            const { name, value } = payload;
            if (name in state) {
                state[name] = value; // Dynamically update state
            }
        },
        registerUser: (state, { payload }) => {
            const { name, email, password } = payload;
            const existingUser = state.users.find((user) => user.email === email);
            if (existingUser) {
                toast.error('User already exists!');
                return;
            }

            const newUser = { id: uuidv4(), name, email, password };
            state.users = [...state.users, newUser];
            addUserToLocalStorage(state.users); // Save updated users to localStorage
            toast.success('User registered successfully!');
            state.isLoggedIn = true;
        },
        loginUser: (state, { payload }) => {
            const { email, password } = payload;
            const user = state.users.find((user) => user.email === email && user.password === password);
            if (user) {
                state.isLoggedIn = true;
                toast.success('Login successful!');
            } else {
                toast.error('Invalid credentials!');
            }
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            toast.success('Logged out successfully!');
        },
        clearUsers: (state) => {
            state.users = [];
            removeUsersFromLocalStorage(); // Remove users from localStorage
            toast.success('All users cleared!');
        },
    },
});

export const { registerUser, handleUserChange, loginUser, logoutUser, clearUsers } = userSlice.actions;

export default userSlice.reducer;
