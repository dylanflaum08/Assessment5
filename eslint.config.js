import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      "@stylistic": stylistic,
    },
  },
  stylistic.configs.customize({
    quotes: "double",
    semi: true,
  }),
  {
    files: ["**/*.test.js"],
    plugins: { jest },
    languageOptions: { globals: jest.environments.globals.globals },
  },
];
