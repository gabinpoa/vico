/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js}'],
  theme: {
    extend: {
      backgroundImage: {
        ranpo:
          'url(https://i.pinimg.com/564x/be/e9/49/bee949aa47dbd23589f30f4eceb06f99.jpg)',
      },
    },
  },
  plugins: [],
};
