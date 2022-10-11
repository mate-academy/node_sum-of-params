module.exports = {
  extends: "@mate-academy/eslint-config",
  env: {
    jest: true,
  },
  rules: {
    "no-proto": 0,
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        semi: false,
        trailingComma: "none",
      },
    ],
  },
  plugins: ["jest"],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
