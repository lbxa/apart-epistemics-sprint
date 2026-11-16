// Native Astro/Vite PostCSS pipeline; retain the template's Tailwind 3 design.
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
