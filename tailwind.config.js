/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '980px',
        'lg': '1340px', 
      },
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Hand"', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '60%': { transform: 'translateX(-5%)' },
          '80%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRoll: {
          '0%': { transform: 'translateX(100%) rotate(0deg)', opacity: '0' },
          // '50%': { transform: 'translateX(-10%) rotate(360deg)', opacity: '1' },
          '100%': { transform: 'translateX(0) rotate(-360deg)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fall: {
          '0%': { transform: 'translateY(-500%) rotate(0deg)', opacity: '0' },
          // '25%': { transform: 'translateY(-75%) rotate(360deg)', opacity: '0.25' },
          // '50%': { transform: 'translateY(-50%) rotate(360deg)', opacity: '0.5' },
          // '75%': { transform: 'translateY(-25%) rotate(360deg)', opacity: '0.75' },
           '60%': { transform: 'translateY(10%) rotate(360deg)', opacity: '0.6' },
           '80%': { transform: 'translateY(-40%) rotate(90deg)', opacity: '0.75' },

          '100%': { transform: 'translateY(0%) rotate(0deg)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        flip: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out',
        slideUp: 'slideUp 1s ease-out forwards',
        slideInFromRight: 'slideInFromRight 1.2s ease-out forwards',
        slideRoll: 'slideRoll 2s ease-in-out',
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
        fadeIn1: 'fadeIn 3s ease-in-out forwards',
        fadeIn2: 'fadeIn 4.5s ease-in-out forwards',
        fadeIn3: 'fadeIn 6.5s ease-in-out backwards',
        fall: 'fall 3s ease-in-out backwards',
        fall2: 'fall 4s ease-in-out backwards',
        fall3: 'fall 2s ease-in-out backwards',
        fall4: 'fall 6s ease-in-out backwards',
        scaleUp: 'scaleUp 1.5s ease-in-out forwards',
        flip: 'flip 1s ease-in-out forwards',
        bounce: 'bounce 2s linear',
        // fall7: 'fall 7s ease-in-out backwards',
        // fall8: 'fall 8s ease-in-out backwards',
        // fall10: 'fall 10s ease-in-out backwards',
        // fall12: 'fall 12s ease-in-out backwards',

      },
      
    },
  },
  plugins: [],
}