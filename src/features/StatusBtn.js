import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
    name: 'status',
    initialState: {value: 'pending'},
    reducers:{
        success: (state, action) => {
            state.value = action.payload
        },
        cancelled: (state, action) => {
            state.value = action.payload
        },
        rejected: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {success, cancelled, rejected} = statusSlice.actions

export default statusSlice.reducer;