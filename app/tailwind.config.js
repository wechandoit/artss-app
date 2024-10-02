/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "approve-green": "#76ab7b",
        "add-blue": "#619dba",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".btn-primary": {
          "@apply flex items-center px-2 py-1 rounded-md": {},
        },
        ".btn-icon": {
          "@apply p-1 rounded-md": {},
        },
        ".dialog-bg": {
          "@apply z-50 flex fixed inset-0 items-center justify-center bg-gray-800 bg-opacity-50":
            {},
        },
        ".dialog-box": {
          "@apply min-w-min bg-white p-6 gap-8 rounded shadow-lg": {},
        },
      });
    },
  ],
};
