import { createApi } from '@reduxjs/toolkit/query/react'
import nextQuery from '../utils/nextQuery'


export const productApi = createApi({
    reducerPath: "productapi",
    baseQuery: nextQuery(),
    endpoints: (builder) => {

        return {

            getShopifyData: builder.query({
                // query: (data) => ({ url: "products/", params: data })
                query: (data) => ({ url: "products/" + data.id }),
                transformResponse: (data) => data.data
                // query: (data) => ({ url: `products?id=${data.id}` })
            })
        }


    }
})


export const { useGetShopifyDataQuery } = productApi;