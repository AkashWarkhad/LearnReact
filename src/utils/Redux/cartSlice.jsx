import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice(
{
    name: "cart",
    initialState: 
    {
        items: []
    },
    reducers: 
    {
        // Key is name of Action & Value is the corresponding reducer logic.
        // state : Existing state & action contains the payload
        addItem: (state, action) => 
        {
            // Redux toolkit uses immer library behind the scene to manage this.
            state.items.push(action.payload);
        },
        removeItem: (state, action)=> 
        {
            state.items.pop();
        },
        clearCart: (state)=> 
        {
            //state.items = []; <- this won't works becuase its just change the local state variable 

            // current is comming from the redux toolkit to print the current state data.
            console.log("Cleared Items from Slice: ", current(state.items));

            state.items.length = 0; // OR  return { items: [] }; <- this will replace the state.items with empty array
        }
    },
    // Not used in the project but try to use it.
    // extraReducers: (builder) => 
    // {
    //     builder.addCase(otherSliceAction, (state, action) => 
    //     {
    //         // logic for handling other slice's action
    //     })

    //     .addDefaultCase((state, action) => 
    //     {
    //         // default logic for handling actions not handled by this slice
    //     });
    // },

    selectors: 
    {
        // Correct selector for cart items
        selectData: (state) => state.cart,

        // Example filtered selector (optional)
        selectFilteredData: (state, filter) => state.cart.items.filter(item => item.name.includes(filter)),
    },

    // selectors: (state) => (
    // {
    //     selectData: () => state.items, // this selector provides available data

    //     selectFilteredData: (filter) => state.items.filter(item => item.includes(filter)) // Provide filtered data.
    // }),
});

// When we create createSlice then cartSlice returns actions & reducer & we can access like below :
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Exports the selectors
export const { selectData, selectFilteredData } = cartSlice.selectors;