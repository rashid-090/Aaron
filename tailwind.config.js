/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "250px",
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1500px",
    },

    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-up': 'slide-up 0.3s ease-out forwards',
      },
      colors: {
        mainclr: "#011c40",
        mainbtn: "#efb13b",
        mainbtnhrv: "#ffe791",
        mainbtnhrv2: "#e7cc6b",
        maingray: "#191919",
        secondarygray2:"#2b2a2a",
        secondarygray:"#fff",
      },
      fontFamily: {
        // light: ["poppins-light", "sans-serif"],
        // regular: ["poppins-regular", "sans-serif"],
        // medium: ["poppins-medium", "sans-serif"],
        // semibold: ["poppins-semibold", "sans-serif"],
        // bold: ["poppins-bold", "sans-serif"],
        // extrabold: ["poppins-extrabold", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('./assets/images/ban1.webp')",
      },
    },
  },
  plugins: [],
};
