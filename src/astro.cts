export const astroConfig = {
  // astro files
  files: ["*.astro"],
  parser: "astro-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
  },
  plugins: ["astro", "only-warn"],
  extends: ["plugin:astro/recommended"],
}
