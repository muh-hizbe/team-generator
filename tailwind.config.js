const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: 'true',
                padding: '1rem',
            },
            colors: {
                cyan: colors.cyan,
                teal: colors.teal,
                'light-blue': colors.lightBlue,
            },
            spacing: {
                112: '28rem',
            },
            tableLayout: ['hover', 'focus'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
