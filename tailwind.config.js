/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false, // Docusaurus has its own reset, so we disable preflight to avoid conflicts
    },
    darkMode: ['class', '[data-theme="dark"]'], // Synchronize with Docusaurus dark mode
};
