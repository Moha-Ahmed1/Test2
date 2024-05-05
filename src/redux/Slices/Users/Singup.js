import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { data } from "autoprefixer";
import axios, { Axios } from "axios";
const intionalState = {
    isloading: false,
    isError: false,
    isSuccuss: false,
    errMsg: false,
    data: {}
}


//Sin up Slice Fuction
export const singinF = createAsyncThunk

    ('user/Singup', async (data, {
        reactWithValue
    }) => {
        try {
            const res = await axios.post("http://localhost:3000/api/user/register", data)
            if (res.data) {
                return res.data
            }

        } catch (error) {
            return reactWithValue(error.response?.data?.message || "Something want worng");

        }
    }
    )

export const sinUpSlice = createSlice({
    name: 'Sigin up Slice',
    reducers: {
        resetSinupState: () =>
            intionalState
    },
    extraReducers(builder) {
        builder.addCase(singinF.pending,
            () => ({
                ...intionalState,
                isloading: true
            }))
        builder.addCase(singinF.fulfilled,
            (_, action) => ({
                ...intionalState,
                isSuccuss: true,
                data: action.payload
            }))
        builder.addCase(singinF.rejected,
            (_, action) => ({
                ...intionalState,
                isError: true,
                errMsg: action.payload
            }))

    },
    intionalState
})
export const { resetSinupState } = sinUpSlice.axios;
