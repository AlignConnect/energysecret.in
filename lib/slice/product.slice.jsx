const { createSlice } = require("@reduxjs/toolkit");

const initialState = {

    quantity: 1,
    allVariants: [],
    selectProducts: [],
    productsdata: null,

}

export const productSlice = createSlice({
    name: "productslice",
    initialState,
    reducers: {
        getStoreProductInfo: (state, action) => {
            state.productsdata = action.payload?.productsdata;
            state.allVariants = action.payload?.allVariants
            state.selectProducts = action.payload?.selectProducts
        },

        selectProductById: (state, action) => {

            // console.log(action.payload)


            state.selectProducts = action.payload.selectProducts

        }

    }

});


export const { getStoreProductInfo, selectProductById } = productSlice.actions