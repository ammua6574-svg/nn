// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2E6B",
        accentGold: "#F59E0B",
        accentDarkGold: "#D97706"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #0B2E6B, #1A73E8)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
