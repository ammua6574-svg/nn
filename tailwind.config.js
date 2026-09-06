// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2E6B',
        deepIndigo: '#06152D',
        orange: '#F59E0B',
        teal: '#0D9488',
        softBlue: '#BFDBFE',
        accentGold: '#F59E0B',
        accentOrange: '#F97316',
        accentDarkGold: '#D97706',
        accentBrightGold: '#FBBF24',
      },
      spacing: {
        2: '8px',
        4: '16px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-light': '0 4px 30px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        planePath: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'plane-path': 'planePath 2s linear infinite',
      },
    },
  },
  plugins: [],
};
