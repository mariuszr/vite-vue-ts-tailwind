module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        tabWidth: 2,
        semi: true,
        trailingComma: "all",
        printWidth: 120,
      },
    ],
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 5,
        multiline: 3,
      },
    ],
    "vue/max-len": [
      "error",
      {
        code: 120,
        template: 1024,
        tabWidth: 2,
        comments: 120,
        ignorePattern: "",
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false,
      },
    ],
    "vue/script-indent": [
      "warn",
      2,
      {
        baseIndent: 1,
      },
    ],
    // indent: ["error", 2],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: [2, "double", { avoidEscape: true }],
    semi: [2, "always"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
