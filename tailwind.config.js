/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Courier', 'monospace'],
        'courier': ['Courier', 'monospace'],
      },
      colors: {
        'primary': '#0f0f0f0',
        'secondary': '#ffffff',
        'accent': '#ff0000', 
      },

      boxShadow: {
        'neo': '4px 4px 0 0 #000000',
        'neo-hover': '6px 6px 0 0 #000000',
      },
   
      borderWidth: {
        '6': '6px',
      },
      colors: {
        'primary': '#FF6B6B',     // Merah terang
        'secondary': '#4ECDC4',   // Cyan terang
        'accent': '#FFD93D',      // Kuning terang
        'background': '#F7FFF7',  // Off-white
        'text': '#000000',        // Hitam
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}