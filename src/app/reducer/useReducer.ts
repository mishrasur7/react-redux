import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../types/user"

const initialState: {userList: User[]} = {
    userList: []
}

export const fetchUser = createAsyncThunk(
    'fetchUser', 
    async () => {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        return data
    }
)

const userSlicer = createSlice({
    name: 'userReducer', 
    initialState: initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.userList = action.payload
        })
    }
})

export const userReducer = userSlicer.reducer