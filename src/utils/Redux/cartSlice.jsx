import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
{
    name: "cart",
    initialState: 
    {
        items: ["Puzza", "Burger"]
    },
    reducers: 
    {
        addItem: (state, action) => 
        {
            state.items.push(action.payload);
        },
        removeItem: (state, action)=> 
        {
            state.items.pop();
        },
        clearCart: (state)=> 
        {
            state.items.length = 0;
            //state.items = []; <- this won't works
        }
    }
});

// When we create createSlice then cartSlice returns actions & reducer & we can access like below :
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;