/** @type {import("prettier").Config} */
export default {
  bracketSpacing: true,
  printWidth: 100,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindStylesheet: "./src/styles/global.css",
}
