import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.config({
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
    },
  }),
  react.config({
    files: ["**/*.jsx", "**/*.tsx"],
    settings: {
      react: {
        version: "detect",
      },
    },
  }),
];
