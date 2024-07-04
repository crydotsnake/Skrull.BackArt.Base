/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['**/Resources/Private/Fusion/**/*.{fusion,yaml,html}'],
    theme: {
        extend: {
            colors: {
                'backart-primary': '#ffdab9',
                'backart-secondary': '#fff8dc',
                'backart-chocolate': '#d2691e',
                'backart-accent': '#ff7f50',
                'backart-accent-dark': '#ff6347',
                'backart-neutral': '#dcdcdc',
                'backart-neutral-dark': '#a9a9a9',
                'backart-saddle-brown': '#8b4513',
                'backart-saddle-brown-dark': '#a0522d',
                'backart-cream': '#fffdd0',
                'backart-lightgrey': '#dcdcdc',
                'backart-wheat': '#f5deb3',
            },
            width: {
                'container-sm': '20.5rem', // 328px
                'container-md': '45.5rem', // 728px
                'container-lg': '61.5rem', // 984px
                'container-xl': '77.5rem', // 1240px
                'container-2xl': '90rem', // 1440px
            },
            maxWidth: {
                'container-sm': '20.5rem', // 328px
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
            },
        },
    },
    variants: {},
    plugins: [],
};
