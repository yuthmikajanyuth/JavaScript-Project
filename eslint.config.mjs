import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
  overrides: [
    {
      files: ["src/*.{js,mjs,cjs}"],
      languageOptions: {
        globals: globals.browser,
      },
      rules: {
        "no-unused-vars": "error", // Treat unused variables as errors
      },
    },
  ],
});
