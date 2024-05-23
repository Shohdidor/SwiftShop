import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProductId } from "../../api/Product/product";

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        ObjGetProduct: [],
        ProductInfo : [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.ObjGetProduct = action.payload;
        });

        builder.addCase(getProductId.fulfilled, ( state , action ) => {
            state . loading = false;
            state . ProductInfo = action.payload
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

export const { } = productSlice.actions;
export default productSlice.reducer;
