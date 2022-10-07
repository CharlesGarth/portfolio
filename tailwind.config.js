/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                coral: '#FF6363',
                cyan: '#97FFDA',
            },
            spacing: {
                gutters: '87px',
            },
        },
        fontFamily: {
            sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            body: ['Montserrat'],
        },
        screens: {
            sm: '375px',
            md: '768px',
            lg: '1440px',
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
