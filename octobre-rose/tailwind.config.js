/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
      backgroundImage: {
        "pink-ribbon":
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDAgNTBDOTAgNDAgODAgNTAgODAgNjBDODAgNzAgOTAgODAgMTAwIDgwQzExMCA4MCAxMjAgNzAgMTIwIDYwQzEyMCA1MCAxMTAgNDAgMTAwIDUwWiIgZmlsbD0iI0ZCQ0ZFOCIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPHA+eCBkPSJNMTAwIDgwQzEwMCAxMDAgMTAwIDEyMCAxMDAgMTQwQzEwMCAxNTAgMTA1IDE2MCAyMTAgMTcwUzEyNSAxODAgMjQ1IDMwMEMxOTUgMTgwIDg1IDE3MCA5NSAxNjBDMTA1IDE1MCAxMDAgMTQwIDEwMCAxNDBDMTAwIDEyMCAxMDAgMTAwIDEwMCA4MFoiIGZpbGw9IiNGOUE4RDQiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4K')",
      },
    },
  },
  plugins: [],
};
