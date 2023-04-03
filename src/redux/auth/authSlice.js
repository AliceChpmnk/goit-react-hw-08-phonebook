import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePendingReducer = (state, action) => state;
const handleRejectedReducer = (state, action) => state;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder
        .addCase(authOperations.register.pending, handlePendingReducer)
        .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        })
        .addCase(authOperations.register.rejected, handleRejectedReducer)
        .addCase(authOperations.logIn.pending, handlePendingReducer)
        .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        })
        .addCase(authOperations.logIn.rejected, handleRejectedReducer)
        .addCase(authOperations.logOut.pending, handlePendingReducer)
        .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        })
        .addCase(authOperations.logOut.rejected, handleRejectedReducer)
        .addCase(authOperations.fetchCurrentUser.pending, (state, action) => {
            state.isRefreshing = true;
        })
        .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
            state.isRefreshing = false;
        })
});

export default authSlice.reducer;