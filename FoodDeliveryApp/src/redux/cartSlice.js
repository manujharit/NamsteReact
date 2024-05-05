import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

// export actions and reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
