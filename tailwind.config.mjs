/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PoppinsVariable", "Poppins", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        footer: "repeat(3, 1fr) auto",
      },
      dropShadow: {
        white: ["0 1px 4px white", "0 0px 5px white"],
        title: [
          "0 0px 4px black",
          "0 0px 20px black",
          "0 0px 30px black",
          "0 0px 40px black",
        ],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 4px 16px var(--tw-shadow-color)",
        none: "none",
        title: [
          "0 1px 4px var(--tw-shadow-color), 0 4px 16px var(--tw-shadow-color)",
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
