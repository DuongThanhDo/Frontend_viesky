/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                form: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                button: '0px 3px 5px 1px rgba(0, 0, 0, 0.25)',
                sidebar: '4px 10px 15px 0px rgba(0, 0, 0, 0.1)',
            },
            colors: {
                act: '#0060FF',
                '#2F80ED': '#2F80ED',
                '#194764': '#194764',
                '#DBE7F5': '#DBE7F5',
                '#1C71FF': '#1C71FF',
                '#D5E6FB': '#D5E6FB',
                '#3F679C': '#3F679C',
                '#3F679CCC': '#3F679CCC',
                penetration2: 'rgba(0, 0, 0, .2)',
                penetration01: 'rgba(0, 0, 0, .01)',
                penetration05: 'rgba(0, 0, 0, .05)',
            },
            gridTemplateRows: {
                auto30: 'repeat(auto-fit, 30%)',
            },
            transitionDelay: {
                threeSeconds: 'transition-duration: 300ms;',
            },
        },
    },
    plugins: [],
};
