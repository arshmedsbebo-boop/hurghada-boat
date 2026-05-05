module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#00172D',
        champagne: '#D4AF37',
        ivory: '#F3E6C3',
      },
      boxShadow: {
        glass: '0 30px 90px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
