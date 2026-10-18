export default {
  content: {
    relative: true,
    files: ['./index.html', './src/**/*.{js,jsx}'],
  },
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EC',
        cream: '#FFFCF7',
        ink: '#33271F',
        coffee: '#684A35',
        linen: '#E8DDD0',
        matcha: '#758266',
        muted: '#827568',
      },
      fontFamily: {
        japanese: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        editorial: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        whisper: '0 18px 65px rgba(76, 49, 30, 0.07)',
        float: '0 24px 55px rgba(66, 45, 31, 0.13)',
      },
      maxWidth: {
        wide: '1320px',
      },
    },
  },
  plugins: [],
};
