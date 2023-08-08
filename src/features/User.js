import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {value: {name:'omotehinse', email:'myMail'}},
    reducers:{
        login: (state, action) => {
            state.value = action.payload
        },
        updateName: (state, action) => {
            state.value.name = action.payload
        },
    }
})

export const {login, updateName} = userSlice.actions

export default userSlice.reducer;