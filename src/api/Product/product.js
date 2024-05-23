import { useDispatch } from "react-redux";
import { axiosRequest } from "../../utils/axiosRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";


// getProduct 
export const getProduct = createAsyncThunk ( "todo/getProduct" , async () => {
    try {
        let { data } = await axiosRequest.get(`Product/get-products`)
        return data?.data
    } catch (error) {
        console.log(error);
    }
})

// getProductId 
export const getProductId = createAsyncThunk ( "todo/getProductId" , async ( id ) => {
    try {
        let { data } = await axiosRequest.get( `Product/get-product-by-id?id=${id}` )
        console.log(data?.data);
        return data?.data
     } catch (error) {
        console.log(error);
     }
})