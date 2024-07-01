/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['DistributionPackages/**/*.{fusion,yaml,html}'],
    theme: {
        extend: {
            colors: {
                'primary-light': '#ffefd5',
                'primary': '#ffdab9',
                'secondary-light': '#faebd7',
                'secondary': '#fff8dc',
                'secondary-dark': '#f0e68c',
                'accent-light': '#ffe4e1',
                'accent': '#ff7f50',
                'accent-dark': '#ff6347',
                'neutral-light': '#f5f5f5',
                'neutral': '#dcdcdc',
                'neutral-dark': '#a9a9a9',
                'chocolate': '#d2691e',
                'cream': '#fffdd0',


                'backart-wheat': '#f5deb3',
                'backart-saddle-brown': '#8b4513',
                'backart-lightgrey': '#dcdcdc'
            },
            width: {
                'container-sm': '37.5rem', // 600px
                'container-md': '45.5rem', // 728px
                'container-lg': '61.5rem', // 984px
                'container-xl': '77.5rem', // 1240px
                'container-2xl': '90rem', // 1440px
            },
            maxWidth: {
                'container-sm': '37.5rem', // 600px
                'container-md': '45.5rem', // 728px
                'container-lg': '61.5rem', // 984px
                'container-xl': '77.5rem', // 1240px
                'container-2xl': '90rem', // 1440px
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            spacing: {
                '8': '2rem', // 32px
                '6': '1.5rem', // 24px
                '7': '1.75rem', // 28px
                '5': '1.25rem', // 20px
                '4': '1rem', // 16px
                '3': '0.75rem', // 12px
            },
            fontSize: {
                base: ['1rem', { lineHeight: '1.5rem' }], // 16px Schriftgröße, 24px Zeilenhöhe
                sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px Schriftgröße, 20px Zeilenhöhe
                lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px Schriftgröße, 28px Zeilenhöhe
                xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px Schriftgröße, 28px Zeilenhöhe
                '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px Schriftgröße, 32px Zeilenhöhe
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px Schriftgröße, 36px Zeilenhöhe
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px Schriftgröße, 40px Zeilenhöhe
                '5xl': ['3rem', { lineHeight: '3.25rem' }], // 48px Schriftgröße, 52px Zeilenhöhe
                '6xl': ['4rem', { lineHeight: '4.25rem' }], // 64px Schriftgröße, 68px Zeilenhöhe,
            },
        },
    },
    variants: {},
    plugins: [],
};
