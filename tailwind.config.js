module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        secondtext: '#374151',
        sky: '#64FFDA',
        charcoal: '#1E293B',
        grayMuted: '#6B7280',
        softGreen: '#16A34A',
        tealHover: '#112240',
        off: '#F4F4F5',
        navbarbg: '#F9FAFB',
        herobg1: '#F9FAFB',
        herobg2: '#E2E8F0',
      },
      fontFamily: {
        darker: ['Darker Grotesque', 'sans-serif'],
      },
      spacing: {
        '90px': '90px',
        '170px': '170px',
      },
    },
  },
  plugins: [],
};
