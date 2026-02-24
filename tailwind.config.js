// @type {import('tailwindcss').Config} 
module.exports = { 
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
    theme: {
        extend: {
            backdropBlur: {
                xs: '2px', },
            fontFamily: {
                ojuju: ['var(--font-ojuju)'],
            },
            keyframes: {
                scrollRight: {
                '0%': { transform: 'translateX(-50%)' },
                '100%': { transform: 'translateX(0%)' },
                },
              },
            animation: {
                scrollRight: 'scrollRight 20s linear infinite',
            },
        },
  },
    plugins: [],
}

