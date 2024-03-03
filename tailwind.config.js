/** @type {import('tailwindcss').Config} */

import prelinePlugin from "preline/plugin";
import tailwindcssForms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    // placeholderColor: false,
    // preflight: false,
  },
  plugins: [prelinePlugin, tailwindcssForms],
};
