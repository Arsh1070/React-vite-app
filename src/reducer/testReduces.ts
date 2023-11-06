import { createSlice } from "@reduxjs/toolkit";

const initialStateObj = {}

const sampleReducerSlice = createSlice({
    name: "test",
    initialState: initialStateObj,
    reducers: {}
});

export default sampleReducerSlice.reducer;