import { fetchBaseQuery } from "@reduxjs/toolkit/query"

export default () => {



    const dataUrl = fetchBaseQuery({
        baseUrl: process.env.NEXT_APP_API_URL_SHOPIFY, prepareHeaders: (header) => {
            header.append('Authorization', process.env.SHOPIFY_GENERATE_TOKEN)
            return header
        }
    });

    // return dataUrl

    return async (args, api, extraOption) => {

        const data = await dataUrl(args, api, extraOption)
        console.log(data)
        return data
    }


}


