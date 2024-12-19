/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif Devanagari", "serif"],
        oswald: ["Oswald", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('/main/hft_home/back3.jpg')",
        hero2: "url('/main/hft_home/2nd.jpg')",
        hero3: "url('/main/hft_home/back34.jpg')",

        herohfd: "url('/main/hfd_images/maintop.jpg')",
        hero2hfd: "url('/main/hfd_images/top2.jpg')",
        hero3hfd: "url('/main/hfd_images/back.jpg')",
        hero4hfd: "url('/main/hfd_images/back3.jpg')",
        hero5hfd: "url('/main/hfd_images/backform.jpg')",

        web1: "url('/main/bhf_images/top1.webp')",
        mobile1: "url('/main/bhf_images/mobile-top2.webp')",
        backg: "url('/main/bhf_images/black.webp')",
        back2: "url('/main/bhf_images/back2.webp')",
      },

    },
  },
  plugins: [],
}
