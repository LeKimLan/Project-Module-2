

import { configureStore } from "@reduxjs/toolkit";
import { shelvesReducer } from './shelves/shelves.slice'


export const store = configureStore({
    reducer: {
        shelvesStore: shelvesReducer
    }
})