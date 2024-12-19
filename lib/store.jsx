import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './service/product.service';
import { productSlice } from './slice/product.slice';



const store = configureStore({

    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [productSlice.name]: productSlice.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware);
    }

});


export default store;


