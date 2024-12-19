/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {

        NEXT_APP_API_URL: 'https://api.brahmikalp.com/api/',

        //main env

        NEXT_APP_URL: 'https://energysecret.in',
        NEXT_APP_API_KEY: 'IzirbejvrVXoYPFKpZHGgWUVgzGIFOSDacVHbqatebKigvemUQ',


        NEXT_APP_URL_HFS: 'https://horsefires.com/hfs',
        NEXT_APP_API_KEY_HFS: 'nnKhEWYVcMlNmkvDvxCHZkaSrYuNLgNRGyibeEFUhIXIpfBgRg',


        NEXT_APP_URL_HFT: 'https://horsefires.com/hft',
        NEXT_APP_API_KEY_HFT: 'ZrEQGaSZUhepBrynxEjAmEKRliBxThYKpLbJmXwCrnDAZZINlT',

        NEXT_APP_URL_HF: 'https://horsefires.com/hf',
        NEXT_APP_API_KEY_HF: 'tNLomJeiQHzktDVcNvUCGoFJJtCvbRadObfnWFrlEoGQswyIjV',


        NEXT_APP_URL_HTM: 'https://energysecret.in/htm',
        NEXT_APP_API_KEY_HTM: 'GqwRoWyZPNXJrCpDwVliXQGHDTyaqDScRxXMQqMGlhRowWFHkG',

        // 


        NEXT_APP_URL_HDS: 'https://energysecret.in/hds',
        NEXT_APP_API_KEY_HDS: 'TRWOGPltkXjINUZKudWLqoFggHQNSJwBKtQHtBTirxtYbYXvrk',

        NEXT_APP_API_URL_SHOPIFY: "https://webapi.brahmikalp.com"

    },

    images: {
        unoptimized: true,

    },
    trailingSlash: true,

    output: "export",
    reactStrictMode: false

}

module.exports = nextConfig;
