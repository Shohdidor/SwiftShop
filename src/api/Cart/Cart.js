import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


// getCart
export const getCart = createAsyncThunk ( "todo/getCart" , async () => {
    try {
        let { data } = await axiosRequest . get ( `Cart/get-products-from-cart` )
        console.log(data?.data[0].productsInCart);
        return data?.data[0].productsInCart
    } catch (error) {
        console.log(error);
    }
}) 

// PostCart 
export const postCart = createAsyncThunk ( "todo/postCart" , async ( id , { dispatch }) => {
    try {
        let { data } = await axiosRequest . post ( `Cart/add-product-to-cart?id=${id}` )
        dispatch (getCart())
    } catch (error) {
        console.log(error);
    }
})

// DeleteCart 

export const deleteCart = createAsyncThunk ( "todo/deleteCart" , async ( id , { dispatch }) => {
    try {
        let { data } = await axiosRequest . delete ( `Cart/delete-product-from-cart?id=${id}` )
        dispatch ( getCart ())
    } catch (error) {
        console.log(error);
    }
} )
