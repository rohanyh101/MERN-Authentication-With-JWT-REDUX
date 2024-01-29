import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;    // save the state...
            localStorage.setItem('userInfo', JSON.stringify(action.payload));   // also save to the localStorage...
        },
        clearCredentials: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
})

// when you call function it's a "ACTION"
export const { setCredentials, clearCredentials } = authSlice.actions;

// when you change state it's a "REDUCER"
export default authSlice.reducer;