import { createSlice } from '@reduxjs/toolkit';
// import {addToCart} from "./redux/cartSlice"

const cartSlice = createSlice({
    name : "cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const {id,name,price}= action.payload

            state.push({
                id:id,
                name:name,
                price:price
            })
        }

    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;