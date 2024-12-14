import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, grecaptcha: "readonly" }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // General
  {
    files: [
      "apps/**/*.ts",
      "apps/**/*.tsx",
      "packages/**/*.ts",
      "packages/**/*.tsx",

    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  // Automation App
  //   {
  //     files: ["apps/automation/**/*.ts"],
  //     rules: {
  //     }
  //   },
  // Core App
];