

import { createSlice } from "@reduxjs/toolkit";


const shelvesSLice = createSlice({
    name: "shelves",
    initialState: {
        books: [],
    },
    reducers: {
        addBook: (state, item) => {
            state.books = [...state.books, item.payload]
            console.log('books', state.books)
        },
        removeBook: (state, item) => {
            state.books = state.books?.filter(book => book.id != item.payload)
            console.log('books', state.books)
        }
    }
})

export const shelvesReducer = shelvesSLice.reducer;
export const shelvesActions = shelvesSLice.actions;