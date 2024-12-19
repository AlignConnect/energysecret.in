"use client"
import React from 'react'

import store from '@/lib/store'
import { Provider } from 'react-redux'
import { useGetShopifyDataQuery } from '@/lib/service/product.service'
import Redux from './component/Redux'

const page = ({ children }) => {



    return (
        <Provider store={store}>
            <Redux>
                {children}
            </Redux>
        </Provider>

    )
}

export default page
