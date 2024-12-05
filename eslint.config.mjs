import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,  // Si vous avez besoin des globals du navigateur
        ...globals.node,     // Ajoutez les globals de Node.js ici
      },
    },
  },
  pluginJs.configs.recommended,
];
