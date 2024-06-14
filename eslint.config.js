import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";

import { fixupPluginRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    ignores: ["vite.config.ts", "dist"],
    plugins: {
      "react-refresh": fixupPluginRules(refresh),
      "react-hooks": fixupPluginRules(hooks),
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  "react-hooks/recommended",
  prettier,
];
