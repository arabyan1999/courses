import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [
        {
            id: 1,
            name: "Illustrator",
            lessonsQuantity: 24,
            duration: 134,
            backgroundImage: "illustration",
            favorite: false,
            newest: true,
            popular: true
        },
        {
            id: 2,
            name: "Graphic design",
            lessonsQuantity: 30,
            duration: 236,
            backgroundImage: "graphic_design",
            favorite: true,
            newest: false,
            popular: true
        }
    ],
    filtered: {
        type: "populars",
        data: []
    }
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filtered = action.payload
        },
        defaultState: state => state
    }
})

export const { filter, defaultState } = filterSlice.actions;

export default filterSlice.reducer;