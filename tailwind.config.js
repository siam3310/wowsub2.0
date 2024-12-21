/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  extend: {
    screens: {
      sm: "640px", // Small screens, like smartphones (default)
      md: "768px", // Medium screens, like tablets (default)
      lg: "1024px", // Large screens, like laptops (default)
      xl: "1280px", // Extra large screens, like desktops (default)
      "2xl": "1536px", // 2x extra large screens
      "3xl": "1920px", // 3x extra large screens
      "4xl": "3840px", // 4x extra large screens
    },
  },
};
