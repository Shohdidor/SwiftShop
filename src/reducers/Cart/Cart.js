import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../api/Cart/Cart";

export const Cart = createSlice ( {
    name : "Cart",
    initialState : {
        loading : false ,
        dataCart : [],
    },
    reducers : {},
    extraReducers : ( builder ) => {
        builder . addCase ( getCart . pending , ( state , action ) => {
            state.loading = true 
        });
        builder . addCase ( getCart . fulfilled , ( state , action ) => {
            state .loading = false ,
            state . dataCart = action.payload 
        });
        builder . addCase ( getCart . rejected , ( state , action ) => {
            state . loading = false 
        })
    }
})

export const {} = Cart.actions
export default Cart.reducer