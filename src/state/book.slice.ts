import { createSlice } from '@reduxjs/toolkit';

export type BookRow = [number, [number, number, number]];
export type BookSnapshot = [number, [number, number, number][]] | [];

const initialState: BookSnapshot = [];

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addSnapshot(state, action) {
            return (state = action.payload);
        },
    },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
